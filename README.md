
# 📸 React Native - Projeto de Câmera

Este projeto é uma aplicação React Native que utiliza o `expo-camera` para capturar fotos, alternar entre as câmeras (frontal e traseira) e salvar imagens na galeria do dispositivo. Ele demonstra o uso de diversos recursos como permissões, modais e gerenciamento de estado.

---

## 🛠️ Funcionalidades

- **Captura de Foto**: Tire fotos utilizando a câmera do dispositivo.
- **Alternar Câmera**: Mude entre a câmera frontal e traseira.
- **Visualização**: Visualize a foto capturada em um modal.
- **Salvar na Galeria**: Salve as fotos capturadas diretamente na galeria do dispositivo.
- **Controle de Permissões**: Solicita ao usuário a permissão necessária para acessar a câmera.

---

## 🗂️ Estrutura do Projeto


- **`components/CameraView`**:
  - **`index.tsx`**: Componente principal que implementa a lógica da câmera.
  - **`props.ts`**: Tipagens e props utilizadas no componente.
  - **`styles.tsx`**: Estilização do componente `CameraView` usando `StyleSheet`.
- **Outros Arquivos**:
  - **`App.tsx`**: Inicializa o aplicativo e renderiza o componente de câmera.
---

## 💻 Tecnologias utilizadas neste projeto:

<div style="display: inline_block">
  <img alt="React Native" src="https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB">
  <img alt="Expo" src="https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white">
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white">
</div>

---

## 🚀 Como funciona o projeto?

### 🛠️ Recursos principais

#### **Gerenciamento de Permissões**
Utiliza o `useCameraPermissions` para solicitar acesso à câmera. Caso o usuário negue a permissão, é exibida uma mensagem personalizada.

#### **Captura de Imagens**
A função `takePicture` utiliza a API `takePictureAsync` do `expo-camera` para capturar a imagem e exibi-la em um modal.

#### **Salvar Fotos**
O `MediaLibrary.saveToLibraryAsync` salva a imagem capturada na galeria do dispositivo.

#### **Alternar Entre Câmeras**
A função `toggleCameraFacing` alterna o estado da câmera entre frontal e traseira.

---

## 📄 Documentação relevante:

- [Expo Camera](https://docs.expo.dev/versions/latest/sdk/camera/)
- [Expo Media Library](https://docs.expo.dev/versions/latest/sdk/media-library/)
- [React Native Modal](https://reactnative.dev/docs/modal)

---

## ⚙️ Como rodar o projeto?

1. Certifique-se de que o **Node.js** e o **Expo CLI** estão instalados.
2. Clone o repositório:
   ```bash
   git clone https://github.com/seu-repositorio/camera-project.git
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```
4. Inicie o projeto:
   ```bash
   expo start
   ```
5. Use um dispositivo físico ou emulador para testar.

---

## ✨ Créditos

Este projeto foi desenvolvido para demonstrar funcionalidades básicas da câmera no React Native utilizando `expo-camera`.

- **Videoaula:** ✨Formação React Native Developer - Manipulando a Câmera de APPS React Native com Expo:
  [DIO](https://web.dio.me/track/formacao-react-native-developer)
