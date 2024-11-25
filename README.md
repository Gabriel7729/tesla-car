# TeslaCar

TeslaCar es una página web diseñada para mostrar y explorar una variedad de automóviles con detalles específicos y características visualmente atractivas.

## Descripción
- Permite a los usuarios ver diferentes modelos de autos.
- Proporciona detalles como el precio, las especificaciones técnicas y opciones de personalización.
- Incluye un diseño intuitivo y moderno que mejora la experiencia del usuario.

## Colaboradores
- Gabriel7729 (GitHub: [@Gabriel7729](https://github.com/Gabriel7729))
- FrandyMorel (GitHub: [@FrandyMorel](https://github.com/FrandyMorel))

## Tecnologías Utilizadas
- **HTML5**
- **CSS3**
- **JavaScript**
- **Frameworks/Librerías**: [Especifica si se usa algún framework, como React.js o Bootstrap]
- **Backend**: [Especifica si se utiliza un backend como Node.js, Django, etc.]

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
