# Backlog do Produto

### **Tema**
Agrupa um conjunto amplo de funcionalidades relacionadas. Representa um grande objetivo de negócio.

### **Épico**
Subdivisão de um tema, agrupando histórias de usuário que abordam uma funcionalidade principal ou processo relevante.

### **História de Usuário**
Descrição breve de uma funcionalidade sob a ótica do usuário final, no formato:  
**“Como [tipo de usuário], quero [funcionalidade] para [benefício].”**

---

## 1. Temas

| **ID** | **Tema** | **Descrição** |
|:--:|:--|:--|
| **T01** | Acesso e Perfil do Usuário | Engloba cadastro, login, preferências e personalização da experiência do usuário. |
| **T02** | Viagens e Entregas | Reúne funcionalidades ligadas a solicitação, agendamento, acompanhamento e cancelamento de viagens e entregas. |
| **T03** | Pagamentos e Benefícios | Trata das formas de pagamento, carteiras digitais, assinaturas e segurança financeira. |
| **T04** | Segurança e Suporte | Inclui recursos de segurança, emergência, comunicação e suporte ao cliente. |
| **T05** | Desempenho, Experiência e Conformidade | Reúne requisitos de performance, acessibilidade, compatibilidade e proteção de dados. |

---

## 2. Épicos

| **ID** | **Épico** | **Tema Relacionado** | **Descrição** |
|:--:|:--|:--|:--|
| **EP01** | Cadastro e Login | T01 | Cadastro e autenticação de usuários na plataforma. |
| **EP02** | Gerenciamento de Perfil | T01 | Edição de informações pessoais e preferências. |
| **EP03** | Preferências de Usuário | T01 | Personalizações e opções específicas do perfil do usuário. |
| **EP04** | Solicitação de Viagem | T02 | Pedido de transporte com escolha de tipo de veículo. |
| **EP05** | Cálculo e Preço | T02 | Estimativa de tempo e valor de corridas. |
| **EP06** | Agendamento | T02 | Planejamento e gerenciamento de viagens futuras. |
| **EP07** | Viagem em Curso | T02 | Acompanhamento em tempo real de uma corrida. |
| **EP08** | Comunicação e Compartilhamento | T02 | Chat, status e segurança de viagens compartilhadas. |
| **EP09** | Cancelamento e Avaliação | T02 | Encerramento de viagens e feedback do usuário. |
| **EP10** | Entregas e Rastreamento | T02 | Envio e acompanhamento de encomendas. |
| **EP11** | Pagamentos e Carteira | T03 | Cadastro de cartões e uso de saldo digital. |
| **EP12** | Assinaturas e Benefícios | T03 | Planos de fidelidade e vantagens exclusivas. |
| **EP13** | Segurança e Emergência | T04 | Recursos de segurança, botão de emergência e PIN. |
| **EP14** | Suporte ao Usuário | T04 | Canais de contato e atendimento técnico. |
| **EP15** | Desempenho e Conformidade | T05 | Desempenho técnico, acessibilidade e LGPD. |

---

## 3. Backlog Consolidado

| **ID** | **Tema** | **Épico** | **História de Usuário** | **Requisito Rastreado** |
|:--:|:--|:--|:--|:--|
| **US01** | T01 | EP01 | Como usuário, quero me cadastrar na plataforma para poder utilizar os serviços. | RF01 |
| **US02** | T01 | EP01 | Como usuário, quero fazer login com minhas credenciais para acessar minha conta. | RF02 |
| **US03** | T01 | EP02 | Como usuário, quero editar meus dados e salvar endereços favoritos. | RF10 |
| **US04** | T01 | EP03 | Como usuária mulher, quero escolher motoristas mulheres para mais segurança. | RF25 |
| **US05** | T02 | EP04 | Como passageiro, quero solicitar uma viagem e escolher a categoria do veículo. | RF05, RF18 |
| **US06** | T02 | EP04 | Como passageiro, quero visualizar veículos próximos e tempo estimado antes de confirmar. | RF06, RF07 |
| **US07** | T02 | EP05 | Como passageiro, quero visualizar o valor estimado da corrida antes da confirmação. | RF08 |
| **US08** | T02 | EP06 | Como passageiro, quero agendar viagens futuras e gerenciá-las facilmente. | RF11, RF12 |
| **US09** | T02 | EP06 | Como motorista, quero ser notificado sobre viagens agendadas e aceitá-las antecipadamente. | RF13, RF19 |
| **US10** | T02 | EP07 | Como passageiro, quero acompanhar o trajeto e a localização do motorista em tempo real. | RF23, RNF24, RNF25 |
| **US11** | T02 | EP07 | Como passageiro, quero adicionar ou alterar paradas durante uma viagem. | RF16 |
| **US12** | T02 | EP08 | Como passageiro, quero compartilhar o status da viagem com contatos de confiança. | RF20 |
| **US13** | T02 | EP08 | Como passageiro, quero conversar com o motorista por chat sem expor meus dados pessoais. | RF09, RNF13 |
| **US14** | T02 | EP09 | Como usuário, quero poder cancelar viagens e avaliar o motorista após o término. | RF30, RF31 |
| **US15** | T02 | EP10 | Como usuário, quero enviar encomendas e rastrear o status em tempo real. | RF03, RNF15 |
| **US16** | T02 | EP10 | Como usuário, quero dividir o valor da corrida com outros passageiros e adicionar paradas. | RF15, RF17 |
| **US17** | T03 | EP11 | Como usuário, quero cadastrar cartões de crédito e débito como forma de pagamento. | RF26 |
| **US18** | T03 | EP11 | Como usuário, quero manter um saldo no aplicativo e utilizá-lo para pagar viagens. | RF27 |
| **US19** | T03 | EP12 | Como usuário, quero assinar um plano de benefícios como o Uber One. | RF28 |
| **US20** | T03 | EP11 | Como usuário, quero que meus dados de pagamento sejam criptografados para garantir segurança. | RNF04, RNF10 |
| **US21** | T04 | EP13 | Como passageiro, quero ter um botão de emergência que acione as autoridades e o suporte. | RF21 |
| **US22** | T04 | EP13 | Como usuário, quero receber um código PIN antes da viagem para confirmar o motorista correto. | RNF12 |
| **US23** | T04 | EP13 | Como usuário, quero poder gravar o áudio da corrida para minha segurança. | RF24 |
| **US24** | T04 | EP14 | Como usuário, quero enviar alertas e feedbacks diretamente ao suporte. | RF22 |
| **US25** | T04 | EP14 | Como usuário, quero contar com suporte técnico disponível 24h. | RNF09 |
| **US26** | T05 | EP15 | Como usuário, quero que o aplicativo processe solicitações em até 3 segundos. | RNF01, RNF17 |
| **US27** | T05 | EP15 | Como usuário, quero que o sistema suporte picos de acesso sem travar. | RNF06, RNF22 |
| **US28** | T05 | EP15 | Como usuário, quero que o aplicativo siga diretrizes WCAG e seja acessível a todos. | RNF18, RNF19 |
| **US29** | T05 | EP15 | Como usuário, quero utilizar o app em Android e iOS atualizados. | RNF05 |
| **US30** | T05 | EP15 | Como usuário, quero que meus dados sejam tratados conforme a LGPD. | RNF10 |

---

**Resumo Geral**
- **Temas:** 5  
- **Épicos:** 15  
- **Histórias de Usuário:** 30  

---
