FROM mcr.microsoft.com/dotnet/core/aspnet:2.1-stretch-slim AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/core/sdk:2.1-stretch AS build
WORKDIR /src
COPY ["DotNetCoreAzure.WebApp/DotNetCoreAzure.WebApp.csproj", "DotNetCoreAzure.WebApp/"]
RUN dotnet restore "DotNetCoreAzure.WebApp/DotNetCoreAzure.WebApp.csproj"
COPY . .
WORKDIR "/src/DotNetCoreAzure.WebApp"
RUN dotnet build "DotNetCoreAzure.WebApp.csproj" -c Release -o /app

FROM build AS publish
RUN dotnet publish "DotNetCoreAzure.WebApp.csproj" -c Release -o /app

FROM base AS final
WORKDIR /app
COPY --from=publish /app .
ENTRYPOINT ["dotnet", "DotNetCoreAzure.WebApp.dll"]