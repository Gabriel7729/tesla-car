# CI/CD Pipeline

Este repositorio contiene un pipeline de CI/CD configurado con GitHub Actions para una aplicación Node.js.

## Funcionalidad
- Ejecuta pruebas automáticas en cada push o pull request a la rama `uat`.
- Si las pruebas pasan, se despliega la aplicación a un entorno de staging.

## Configuración
- Framework de pruebas: Jest
- Entorno de desarrollo: Node.js

## Archivo de Workflow
El pipeline está configurado en `.github/workflows/ci-cd-pipeline.yml`.

## Ejecución
1. Instala las dependencias:
   ```bash
   npm install
