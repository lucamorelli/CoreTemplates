using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json.Serialization;
using AureliaAuth.Models;
using Microsoft.EntityFrameworkCore;
using AureliaAuth.Services;
using OpenIddict;
using NWebsec.AspNetCore.Middleware;
using CryptoHelper;

// https://aurelia-authentication.spoonx.org
// https://github.com/spoonx/aurelia-authentication

namespace AureliaAuth
{
    public class Startup
    {
        public Startup(IHostingEnvironment env)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true)
                .AddEnvironmentVariables();

            if (env.IsDevelopment())
            {
                // For more details on using the user secret store see http://go.microsoft.com/fwlink/?LinkID=532709
                builder.AddUserSecrets();
            }

            Configuration = builder.Build();
        }

        public IConfigurationRoot Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            // Add framework services.
            services.AddMvc()
                // uncomment this if you want that serializing objects in the api results the casing is respected
                //.AddJsonOptions(options => {

                //    var resolver = options.SerializerSettings.ContractResolver;
                //    if (resolver != null)
                //    {
                //        var res = resolver as DefaultContractResolver;
                //        res.NamingStrategy = null;  // <<!-- this removes the camelcasing
                //    }
                //})
                ;

            services.AddDbContext<ApplicationDbContext>(options =>
                options.UseSqlServer(Configuration["Data:DefaultConnection:ConnectionString"]));

            // Register the Identity services.
            services.AddIdentity<ApplicationUser, IdentityRole<Guid>>()
                .AddEntityFrameworkStores<ApplicationDbContext, Guid>()
                .AddDefaultTokenProviders();

            // Register the OpenIddict services, including the default Entity Framework stores.
            services.AddOpenIddict<ApplicationDbContext, Guid>()
                // Register the ASP.NET Core MVC binder used by OpenIddict.
                // Note: if you don't call this method, you won't be able to
                // bind OpenIdConnectRequest or OpenIdConnectResponse parameters.
                .AddMvcBinders()

                // Enable the authorization, logout, token and userinfo endpoints.
                .EnableAuthorizationEndpoint("/connect/authorize")
                .EnableLogoutEndpoint("/connect/logout")
                .EnableTokenEndpoint("/connect/token")
                .EnableUserinfoEndpoint("/connect/userinfo")

                // Note: the Mvc.Client sample only uses the authorization code flow but you can enable
                // the other flows if you need to support implicit, password or client credentials.
                .AllowAuthorizationCodeFlow()
                .AllowRefreshTokenFlow()
                .AllowPasswordFlow()

                // During development, you can disable the HTTPS requirement.
                .DisableHttpsRequirement()

                // Register a new ephemeral key, that is discarded when the application
                // shuts down. Tokens signed using this key are automatically invalidated.
                // This method should only be used during development.
                .AddEphemeralSigningKey();

            // Note: if you don't explicitly register a signing key, one is automatically generated and
            // persisted on the disk. If the key cannot be persisted, an exception is thrown.
            // 
            // On production, using a X.509 certificate stored in the machine store is recommended.
            // You can generate a self-signed certificate using Pluralsight's self-cert utility:
            // https://s3.amazonaws.com/pluralsight-free/keith-brown/samples/SelfCert.zip
            // 
            // services.AddOpenIddict<ApplicationUser, IdentityRole<Guid>, ApplicationDbContext, Guid>()
            //     .AddSigningCertificate("7D2A741FE34CC2C7369237A5F2078988E17A6A75");
            // 
            // Alternatively, you can also store the certificate as an embedded .pfx resource
            // directly in this assembly or in a file published alongside this project:
            // 
            // services.AddOpenIddict<ApplicationUser, IdentityRole<Guid>, ApplicationDbContext, Guid>()
            //     .AddSigningCertificate(
            //          assembly: typeof(Startup).GetTypeInfo().Assembly,
            //          resource: "Mvc.Server.Certificate.pfx",
            //          password: "OpenIddict");

            services.AddTransient<IEmailSender, AuthMessageSender>();
            services.AddTransient<ISmsSender, AuthMessageSender>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            loggerFactory.AddDebug();

            app.UseDefaultFiles(new DefaultFilesOptions
            {
                DefaultFileNames = new[] { "default.html", "index.html" }
            });

            app.UseStaticFiles();


            app.UseIdentity();
            app.UseOAuthValidation();

            app.UseStatusCodePagesWithReExecute("/error");

            app.UseOpenIddict();

            if (env.IsDevelopment())
            {
                app.UseBrowserLink();
                app.UseDeveloperExceptionPage();
            }


            //            app.UseMvcWithDefaultRoute();
            app.UseMvc(routes =>
            {
                routes.MapRoute("default",
                                "{controller=Home}/{action=Index}/{id?}");
                routes.MapRoute("spa-fallback",
                                "{*anything}",
                                new { controller = "Home", action = "Index" });
            });


        }


    }
}
