# First Things First  

## Aplicativo de Mobilidade — UBER

---

## 🎯 Objetivo do Projeto

O objetivo deste projeto é desenvolver e priorizar as funcionalidades essenciais para um **aplicativo de transporte por demanda**, inspirado no modelo do UBER, mas voltado para um contexto de **mobilidade urbana sob demanda**, com **experiência fluida**, **gestão eficiente de corridas**, e **integração com sistemas de pagamento e geolocalização em tempo real**.

O documento visa orientar a priorização das entregas com base na lógica **First Things First (FTF)**, garantindo que os componentes críticos — **matching entre passageiro e motorista, rastreabilidade, segurança e experiência do usuário** — sejam desenvolvidos de forma estratégica e progressiva.

---

## 👥 Público-Alvo

O aplicativo atenderá **quatro principais perfis de usuários**:

1. **Passageiros:** usuários finais que solicitam corridas, consultam preços, acompanham motoristas em tempo real, realizam pagamentos e avaliam o serviço.  
2. **Motoristas:** profissionais parceiros que recebem solicitações de corrida, gerenciam disponibilidade, visualizam ganhos e histórico de viagens.  
3. **Equipe de suporte e atendimento:** responsáveis pela gestão de ocorrências, disputas, cancelamentos e suporte técnico aos usuários.  
4. **Administradores:** gestores do sistema, responsáveis por monitorar métricas, aprovar cadastros, gerenciar preços dinâmicos e supervisionar as operações.

O aplicativo será voltado a um público amplo, priorizando **usabilidade universal**, **acessibilidade**, **rapidez** e **segurança transacional e pessoal**.  

---

## 🤝 Stakeholders  

Os stakeholders diretos e indiretos são:

- **Passageiros:** interessados em conveniência, segurança, transparência e previsibilidade de custos.  
- **Motoristas:** necessitam de um sistema estável, com pagamentos confiáveis e algoritmo justo de distribuição de corridas.  
- **Suporte operacional:** equipe responsável por manter a comunicação eficiente entre as partes e resolver incidentes em tempo real.  
- **Administradores da plataforma:** supervisionam KPIs, precificação, níveis de serviço (SLA) e feedbacks gerais.  
- **Instituições financeiras e gateways de pagamento:** responsáveis por processar transações, repasses e verificação de identidade financeira.  
- **Órgãos regulatórios:** entidades que podem exigir relatórios, compliance e verificação de credenciais de condutores.  
- **Equipe técnica e de design:** responsáveis por traduzir o escopo em arquitetura sólida, experiência fluida e interface responsiva.

---

## 📦 Escopo Inicial  

O escopo inicial visa garantir a **operação mínima viável (MVP)** da plataforma, contemplando:

- Criação e autenticação de contas;  
- Localização e rastreamento em tempo real;  
- Solicitação e aceitação de corridas;  
- Cálculo dinâmico de tarifas;  
- Comunicação direta entre passageiro e motorista;  
- Registro e controle de pagamentos;  
- Avaliação e feedback mútuo.  

Essas entregas compõem a **prioridade estratégica FTF**, que sustenta toda a operação do ecossistema.  
O foco inicial deve estar em **estabilidade, latência mínima e confiabilidade transacional**.

---

## ⚙️ Funcionalidades por Perfil  

---

### 🧭 Usuários Não Logados

1. **Tela de Splash:**  
   Exibe a marca do aplicativo e reforça a credibilidade do sistema.  
   *Importante para identidade e carregamento inicial de APIs de localização.*

2. **Tela de Login e Cadastro:**  
   - Entrar via e-mail, telefone, Google ou Apple ID.  
   - Verificação em dois fatores (SMS ou push).  
   - Opção de “Explorar como visitante” para simular uma corrida.  

3. **Tela de Exploração (antes do login):**  
   - Mapa com áreas de cobertura ativa.  
   - Botão “Criar conta e solicitar corrida”.  
   - Política de segurança e privacidade acessíveis.

---

### 🚗 Passageiros

#### Navbar Principal

1. **Início (Mapa e Solicitação):**  
   - Campo “Para onde?” integrado ao Google Maps API.  
   - Sugestões automáticas com base em histórico e favoritos.  
   - Estimativa de preço e tempo de chegada.  
   - Seleção de tipo de corrida (Econômico, Executivo, Compartilhado).  
   - Botão “Solicitar Corrida”.  

2. **Corrida em Andamento:**  
   - Rastreamento em tempo real do motorista.  
   - Dados do veículo, nome do condutor e avaliação.  
   - Botão de emergência e opção de compartilhar localização.  
   - Botão de cancelamento (com política de taxa).  

3. **Histórico de Corridas:**  
   - Lista de viagens com data, valor e status.  
   - Filtros por data, local e tipo de corrida.  
   - Opção de gerar recibo digital ou reportar problema.  

4. **Pagamentos:**  
   - Adição e gerenciamento de cartões, PIX, PayPal.  
   - Divisão de pagamento com outros passageiros.  
   - Histórico de cobranças e créditos promocionais.  

5. **Perfil e Configurações:**  
   - Informações pessoais, documentos e endereços favoritos.  
   - Configurações de idioma, acessibilidade e notificações.  
   - Suporte e política de cancelamento.  

---

### 🚙 Motoristas

#### Navbar Principal

1. **Painel Hoje:**  
   - Exibição de status (Disponível / Ocupado).  
   - Próximas corridas agendadas ou em andamento.  
   - Indicadores do dia: corridas feitas, ganhos, avaliações.  

2. **Solicitações de Corrida:**  
   - Notificação sonora e visual de corrida próxima.  
   - Visualização prévia: origem, destino, preço estimado, distância.  
   - Opção de aceitar ou recusar.  

3. **Corrida em Andamento:**  
   - Rastreamento do trajeto via GPS.  
   - Função de navegação integrada (Google ou Waze).  
   - Registro automático de início, pausa e fim da corrida.  
   - Confirmação de entrega do passageiro.  

4. **Ganhos e Pagamentos:**  
   - Extrato diário e semanal.  
   - Cálculo automático de comissões e bônus.  
   - Opção de saque via PIX.  

5. **Configurações:**  
   - Atualização de dados do veículo e documentos.  
   - Preferências de rota (pedágios, estradas).  
   - Histórico de avaliações.  

---

### 🧑‍💼 Suporte e Atendimento

1. **Chat em Tempo Real:**  
   - Canal central entre passageiros, motoristas e suporte.  
   - Sistema de tickets por ocorrência.  

2. **Gestão de Ocorrências:**  
   - Consulta de corridas reportadas.  
   - Classificação por tipo (cancelamento, segurança, pagamento).  
   - Encaminhamento automático para equipes especializadas.  

3. **Painel de Comunicação:**  
   - Envio de comunicados e alertas push segmentados.  

---

### 🏢 Administradores

1. **Dashboard Gerencial:**  
   - Visualização de métricas de operação (corridas/dia, taxa de cancelamento, receita bruta).  
   - Mapas de calor de demanda e disponibilidade.  

2. **Gestão de Motoristas e Passageiros:**  
   - Aprovação e suspensão de contas.  
   - Verificação de documentos e licenças.  

3. **Controle de Tarifas e Promoções:**  
   - Algoritmo de preço dinâmico com base em horário, demanda e área.  
   - Criação e gerenciamento de cupons.  

4. **Relatórios Operacionais:**  
   - Exportação de dados por período.  
   - Análise de desempenho e feedbacks agregados.  

5. **Segurança e Compliance:**  
   - Monitoramento de incidentes e registros de segurança.  
   - Logs criptografados e autenticação multiusuário.  

---

## 🧩 Priorização FTF  

| Categoria | Descrição | Nível de Prioridade |
|------------|------------|--------------------|
| Core Functionality | Matching passageiro–motorista, geolocalização, tracking, pagamentos | **Crítica (P1)** |
| Segurança e autenticação | Login seguro, verificação de identidade, botões de emergência | **Alta (P1)** |
| Comunicação | Chat em tempo real, notificações push | **Alta (P2)** |
| Experiência do usuário | Interface fluida, carregamento rápido, design responsivo | **Média (P2)** |
| Gestão administrativa | Painéis de controle e relatórios | **Média (P3)** |
| Recursos secundários | Cupons, histórico avançado, filtros, modos de corrida | **Baixa (P4)** |

---

## 🧠 Considerações Finais  

O desenvolvimento seguirá a filosofia **“Entregar primeiro o que move o negócio”**, priorizando:

- Corridas estáveis, rápidas e seguras;  
- Sistema de pagamento confiável;  
- Comunicação clara e em tempo real;  
- Escalabilidade para múltiplas cidades.

As fases seguintes poderão incorporar camadas como **gamificação**, **assinaturas premium**, e **integração com transporte público**, sempre guiadas pelo princípio do **First Things First**: desenvolver o que gera valor imediato e sustentável.
