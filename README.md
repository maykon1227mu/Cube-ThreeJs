# 📦 Three.js: Cubo Rotativo Básico

Este é um projeto minimalista para iniciar o desenvolvimento 3D no navegador usando a biblioteca **Three.js**. Ele demonstra a estrutura fundamental necessária para criar e animar uma cena 3D.

## ✨ Features (Conceitos Demonstrados)

* **Configuração Base:** Criação de uma `Scene`, `PerspectiveCamera` e `WebGLRenderer`.
* **Controles Interativos:** Implementação do **OrbitControls** para permitir a rotação e o zoom na cena usando o mouse.
* **Geometria e Material:** Adição de um cubo 3D (`BoxGeometry`) com material padrão (`MeshStandardMaterial`).
* **Iluminação:** Uso de uma `HemisphereLight` para iluminação básica e uniforme do objeto.
* **Animação:** Utilização do `requestAnimationFrame` para criar um loop de animação contínua que rotaciona o cubo.
* **Tone Mapping:** Configuração de `ACESFilmicToneMapping` e `SRGBColorSpace` para renderização de cores de alta qualidade.

## 🛠️ Tecnologias

* **JavaScript (ES Modules)**
* **Three.js (v0.161.0)**

## 🚀 Como executar

Devido ao uso de `importmap` e CDNs, basta abrir o arquivo `index.html` em qualquer navegador moderno.
