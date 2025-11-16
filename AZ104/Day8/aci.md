### What is Azure Container Instance (ACI)?
Azure Container Instances is a service in Azure that allows you to run Docker containers easily without managing any virtual machines. It is a simple, fast, serverless container option.

### Key Features

Serverless → No VM management required

Fast Deployment → Run containers within seconds

Per-second billing → Pay only for what you use

Scalable → Choose the CPU/RAM you need

Isolated Environment → Each container runs in its own secure environment

### When to use ACI?

- Small applications
- API testing
- Temporary workloads
- Development / QA environments
- Batch jobs / cron jobs
- Microservices that don’t need full orchestration
### Does ACI support only Docker?

ACI supports any container image that follows the Open Container Initiative (OCI) standard.

This includes:

- Docker images
- OCI-compliant images
- Images built with tools like:
   - Buildah
   - Podman

Kaniko

Azure Container Build

GitHub Actions OCI builders

Any OCI-compatible container engine

So ACI is not limited to Docker, but Docker images are the most commonly used.

📌 What ACI does NOT support

Virtual machines

LXC containers

Windows containers (Microsoft removed support in some regions)

Kubernetes-style multi-container pods (only limited “container groups”)

Privileged containers

Stateful storage (only basic file share)

📌 Where can your image come from?

ACI can pull from:

Docker Hub

Azure Container Registry (ACR)

GitHub Container Registry (GHCR)

Google Container Registry (GCR)

Any OCI registry


