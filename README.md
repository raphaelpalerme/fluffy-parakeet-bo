# 1pad-strapi Back Office Application

1pad-strapi is our back office application for creating and modifying 1PAD questions.

## System Requirements

- Node.js 18.x or higher
- NPM 6.x or higher or Yarn 1.22.x or higher
- At least 1GB of RAM
- PostgreSQL 11 or higher (if using PostgreSQL database)

## 🐳 Running with Docker

### Prerequisites

1. Install Docker:
   - Windows/Mac: Download and install [Docker Desktop](https://www.docker.com/products/docker-desktop)
   - Linux: Follow the [installation guide](https://docs.docker.com/engine/install/) for your distribution

2. Verify installation:
```bash
docker --version
docker compose --version
```

### Docker Setup

1. Clone the repository:
```bash
git clone <repository-url>
cd 1pad-strapi
```

2. Create a `.env` file in the root directory:
```bash
# Server
HOST=0.0.0.0
PORT=1337

# Secrets
APP_KEYS=jtIMkG7K6ip7lyOfurNP9A==,9it3Gq3OPsd2kbSFXZu79w==,FzSm/cs9YB5TXZTHZCgc5g==,30r7SsowX4CBO4j5YTt6cg==
API_TOKEN_SALT=NIN7YaNZpNI7bI/B/Gnbtg==
ADMIN_JWT_SECRET=k+t2rgUSRa5dYnVfJG1dvw==
TRANSFER_TOKEN_SALT=ulcSEAOE53NPjwjmAD+DYw==

# Database
DATABASE_CLIENT=postgres
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_NAME=strapi
DATABASE_USERNAME=dev
DATABASE_PASSWORD=dev
DATABASE_SSL=false
DATABASE_FILENAME=
JWT_SECRET=M6wAyIwvEVIOSEBw0vqagQ==
```

3. Start the application:
```bash
docker compose up -d
```

4. Access the application at `http://localhost:1337/admin`

### Docker Commands

```bash
# Stop containers
docker compose down

# View logs
docker compose logs -f

# Rebuild containers
docker compose up -d --build
```

## 🚀 Running Locally

### Development

Start Strapi in development mode with auto-reload:
```bash
npm run develop
# or
yarn develop
```

### Production

Start Strapi in production mode:
```bash
npm run start
# or
yarn start
```

### Build

Build the admin panel:
```bash
npm run build
# or
yarn build
```

## ⚙️ Deployment

Deploy to Strapi Cloud:
```bash
yarn strapi deploy
```

For other deployment options, check the [deployment documentation](https://docs.strapi.io/dev-docs/deployment).

## 📚 Resources

- [Resource center](https://strapi.io/resource-center)
- [Documentation](https://docs.strapi.io)
- [Tutorials](https://strapi.io/tutorials)
- [Blog](https://strapi.io/blog)
- [Changelog](https://strapi.io/changelog)
- [GitHub repository](https://github.com/strapi/strapi)

## ✨ Community

- [Discord](https://discord.strapi.io)
- [Forum](https://forum.strapi.io/)
- [Awesome Strapi](https://github.com/strapi/awesome-strapi)

## 🔧 Configuration

For detailed configuration options, refer to the [Strapi documentation](https://docs.strapi.io/dev-docs/cli).

## 📝 License

[MIT License](LICENSE)