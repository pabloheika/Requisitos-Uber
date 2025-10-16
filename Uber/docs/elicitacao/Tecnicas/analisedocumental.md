# Analise Documental

A análise documental é uma técnica fundamental na elicitação de requisitos, consistindo na revisão sistemática e criteriosa de documentos existentes para identificar funcionalidades, regras de negócio e restrições de um sistema. Este método analítico requer a examinação e interpretação de dados para derivar significados, compreensões e desenvolver conhecimento empírico sobre o domínio do problema. O processo se inicia com uma análise preliminar para selecionar os documentos mais relevantes, que podem incluir manuais de sistemas legados, planos de negócio, legislação aplicável ou, como neste caso, a análise de um projeto similar para inspirar a estruturação de requisitos.

Neste artefato, aplicamos a metodologia de análise documental para elicitar requisitos para o aplicativo da Uber. Identificamos funcionalidades centrais e extraímos requisitos a partir de um modelo de perguntas e respostas. A estrutura, proposta por Vazquez et. al (2016), organiza o processo de elicitação em torno de uma pergunta-chave, a resposta correspondente e o requisito derivado dela. Cada requisito é classificado com um ID único (ADxx), seu tipo (Funcional - RF ou Sim-Funcional - RNF) e a versão, permitindo um rastreamento claro e eficiente.

As seções a seguir detalham os requisitos elicitados para áreas críticas do aplicativo Uber, demonstrando como a análise de processos análogos pode gerar insights valiosos para o desenvolvimento de novas funcionalidades ou a melhoria das existentes.

### Agendamento e Gestão de Viagens

| ID   | Pergunta | Requisito elicitado | Tipo | Versão |
|------|-----------|---------------------|------|---------|
| AD01 | Como o usuário pode solicitar uma viagem para uma data ou horário futuro? | O usuário deve ser capaz de agendar uma viagem com até 30 dias de antecedência. | RF | 1.0 |
| AD02 | O que acontece se o usuário precisar alterar o destino no meio do percurso? | O usuário deve poder adicionar ou alterar paradas durante uma viagem em andamento. | RF | 1.0 |
| AD03 | Como o sistema lida com viagens para múltiplos passageiros que desejam dividir o custo? | O aplicativo deve permitir a divisão do valor da corrida com outros passageiros. | RF | 1.0 |
| AD04 | O aplicativo oferece opções para diferentes necessidades ou preferências de viagem? | O usuário deve poder escolher entre diferentes categorias de veículos (ex: UberX, Comfort, Black). | RF | 1.0 |
| AD05 | Como o aplicativo pode agilizar solicitações de viagens frequentes? | O usuário deve poder salvar endereços como "Casa" e "Trabalho" para acesso rápido. | RF | 1.0 |
| AD06 | Como o usuário pode visualizar e gerenciar viagens agendadas? | O sistema deve permitir ao usuário visualizar, editar ou cancelar viagens agendadas antes do horário programado. | RF | 1.0 |
| AD07 | O usuário pode receber lembretes sobre viagens futuras? | O aplicativo deve enviar notificações de lembrete para viagens agendadas com antecedência. | RF | 1.0 |
| AD08 | O motorista é notificado sobre viagens agendadas? | O aplicativo deve notificar motoristas disponíveis sobre viagens agendadas próximas, permitindo que aceitem antecipadamente. | RF | 1.0 |
| AD09 | Como o usuário pode acompanhar uma viagem em andamento? | O aplicativo deve exibir em tempo real o trajeto, o tempo estimado e a localização atual do veículo. | RF | 1.0 |
| AD10 | O usuário pode avaliar viagens passadas? | O sistema deve permitir ao usuário avaliar e deixar feedback sobre o motorista e a experiência após o término da viagem. | RF | 1.0 |
| AD11 | Como o aplicativo lida com cancelamentos de última hora? | O sistema deve permitir o cancelamento de viagens, aplicando políticas de taxa de cancelamento quando aplicável. | RF | 1.0 |
| AD12 | O usuário pode acessar o histórico de viagens? | O aplicativo deve disponibilizar uma lista com o histórico de viagens, incluindo datas, valores e motoristas. | RF | 1.0 |
| AD13 | É possível agendar viagens recorrentes (ex: toda segunda às 8h)? | O sistema deve permitir que o usuário configure viagens recorrentes para horários e dias fixos. | RF | 1.0 |
| AD14 | O aplicativo oferece estimativas de preço antes da solicitação? | O sistema deve calcular e exibir o valor estimado da corrida antes da confirmação. | RF | 1.0 |
| AD15 | O aplicativo permite múltiplas paradas no agendamento? | O usuário deve poder adicionar várias paradas ao agendar uma viagem. | RF | 1.0 |
| AD16 | O sistema deve responder rapidamente às solicitações de agendamento? | O sistema deve processar solicitações de agendamento em até 3 segundos. | RNF | 1.0 |
| AD17 | O sistema é confiável para uso contínuo? | O sistema deve manter disponibilidade mínima de 99,5% para o serviço de agendamento. | RNF | 1.0 |
| AD18 | A interface de agendamento é fácil de usar? | A interface de agendamento deve ser intuitiva e acessível em até 3 toques a partir da tela inicial. | RNF | 1.0 |
| AD19 | As informações do usuário estão seguras durante o uso? | As informações de pagamento e localização devem ser criptografadas de ponta a ponta. | RNF | 1.0 |
| AD20 | O aplicativo funciona em diferentes sistemas operacionais? | O aplicativo deve funcionar corretamente nos sistemas Android e iOS. | RNF | 1.0 |
| AD21 | O sistema suporta grande volume de usuários simultaneamente? | O sistema deve suportar simultaneamente até 1 milhão de usuários ativos agendando viagens. | RNF | 1.0 |
| AD22 | O sistema é fácil de manter e atualizar? | O código do módulo de agendamento deve seguir boas práticas, com arquitetura modular e documentação interna. | RNF | 1.0 |
| AD23 | O aplicativo integra-se com outros serviços? | O aplicativo deve integrar-se com APIs externas de mapas (ex: Google Maps) e serviços de pagamento (ex: PayPal, Pix). | RNF | 1.0 |
| AD24 | O sistema está disponível a qualquer hora do dia? | O usuário deve poder acessar o histórico e agendar viagens 24h por dia, 7 dias por semana. | RNF | 1.0 |
| AD25 | O sistema protege os dados pessoais do usuário conforme a legislação? | O aplicativo deve seguir a LGPD, garantindo o consentimento explícito para uso de dados de localização. | RNF | 1.0 |

### Funcionalidades de Segurança

| ID   | Pergunta | Requisito elicitado | Tipo | Versão |
|------|-----------|---------------------|------|---------|
| AD26 | Como o usuário pode compartilhar os detalhes de sua viagem com contatos de confiança? | O usuário deve poder compartilhar o status e o trajeto da sua viagem em tempo real com contatos de confiança. | RF | 1.0 |
| AD27 | Que recurso de emergência está disponível durante uma viagem? | O usuário deve ter acesso a um botão de emergência que acione as autoridades locais e o suporte da plataforma. | RF | 1.0 |
| AD28 | Como o aplicativo monitora a segurança da viagem de forma proativa? | O sistema deve identificar paradas longas ou desvios de rota inesperados e enviar uma notificação para verificar se está tudo bem. | RNF | 1.0 |
| AD29 | De que forma o usuário pode garantir que está entrando no carro correto? | O sistema deve gerar um código de verificação (PIN) que o usuário informa ao motorista antes do início da viagem. | RNF | 1.0 |
| AD30 | Como o aplicativo protege as informações de contato de usuários e motoristas? | A comunicação entre passageiro e motorista deve ser anonimizada dentro do aplicativo, sem expor números de telefone. | RNF | 1.0 |
| AD31 | Como o aplicativo assegura a proteção dos dados de pagamento e localização? | As informações sensíveis, como dados bancários e de localização, devem ser criptografadas de ponta a ponta. | RNF | 1.0 |
| AD32 | O usuário pode compartilhar alertas de segurança ou incidentes com a plataforma? | O aplicativo deve permitir que o usuário envie alertas de segurança ou feedback sobre o motorista diretamente ao suporte. | RF | 1.0 |

### Requisitos Funcionais

| ID   | Requisito elicitado | Implementado | Versão |
|------|---------------------|---------------|---------|
| AD01 | O usuário deve ser capaz de agendar uma viagem com até 30 dias de antecedência. | Sim | 1.0 |
| AD02 | O usuário deve poder adicionar ou alterar paradas durante uma viagem em andamento. | Sim | 1.0 |
| AD03 | O aplicativo deve permitir a divisão do valor da corrida com outros passageiros. | Sim | 1.0 |
| AD04 | O usuário deve poder escolher entre diferentes categorias de veículos (ex: UberX, Comfort, Black). | Sim | 1.0 |
| AD05 | O usuário deve poder salvar endereços como "Casa" e "Trabalho" para acesso rápido. | Sim | 1.0 |
| AD06 | O sistema deve permitir ao usuário visualizar, editar ou cancelar viagens agendadas antes do horário programado. | Sim | 1.0 |
| AD07 | O aplicativo deve enviar notificações de lembrete para viagens agendadas com antecedência. | Sim | 1.0 |
| AD08 | O aplicativo deve notificar motoristas disponíveis sobre viagens agendadas próximas, permitindo que aceitem antecipadamente. | Sim | 1.0 |
| AD09 | O aplicativo deve exibir em tempo real o trajeto, o tempo estimado e a localização atual do veículo. | Sim | 1.0 |
| AD10 | O sistema deve permitir ao usuário avaliar e deixar feedback sobre o motorista e a experiência após o término da viagem. | Sim | 1.0 |
| AD11 | O sistema deve permitir o cancelamento de viagens, aplicando políticas de taxa de cancelamento quando aplicável. | Sim | 1.0 |
| AD12 | O aplicativo deve disponibilizar uma lista com o histórico de viagens, incluindo datas, valores e motoristas. | Sim | 1.0 |
| AD13 | O sistema deve permitir que o usuário configure viagens recorrentes para horários e dias fixos. | Sim | 1.0 |
| AD14 | O sistema deve calcular e exibir o valor estimado da corrida antes da confirmação. | Sim | 1.0 |
| AD15 | O usuário deve poder adicionar várias paradas ao agendar uma viagem. | Sim | 1.0 |
| AD26 | O usuário deve poder compartilhar o status e o trajeto da sua viagem em tempo real com contatos de confiança. | Sim | 1.0 |
| AD27 | O usuário deve ter acesso a um botão de emergência que acione as autoridades locais e o suporte da plataforma. | Sim | 1.0 |
| AD32 | O aplicativo deve permitir que o usuário envie alertas de segurança ou feedback sobre o motorista diretamente ao suporte. | Sim | 1.0 |


### Requisitos Sim Funcionais

| ID   | Requisito elicitado | Implementado | Versão |
|------|---------------------|---------------|---------|
| AD16 | O sistema deve processar solicitações de agendamento em até 3 segundos. | Sim | 1.0 |
| AD17 | O sistema deve manter disponibilidade mínima de 99,5% para o serviço de agendamento. | Sim | 1.0 |
| AD18 | A interface de agendamento deve ser intuitiva e acessível em até 3 toques a partir da tela inicial. | Sim | 1.0 |
| AD19 | As informações de pagamento e localização devem ser criptografadas de ponta a ponta. | Sim | 1.0 |
| AD20 | O aplicativo deve funcionar corretamente nos sistemas Android e iOS. | Sim | 1.0 |
| AD21 | O sistema deve suportar simultaneamente até 1 milhão de usuários ativos agendando viagens. | Sim | 1.0 |
| AD22 | O código do módulo de agendamento deve seguir boas práticas, com arquitetura modular e documentação interna. | Sim | 1.0 |
| AD23 | O aplicativo deve integrar-se com APIs externas de mapas (ex: Google Maps) e serviços de pagamento (ex: PayPal, Pix). | Sim | 1.0 |
| AD24 | O usuário deve poder acessar o histórico e agendar viagens 24h por dia, 7 dias por semana. | Sim | 1.0 |
| AD25 | O aplicativo deve seguir a LGPD, garantindo o consentimento explícito para uso de dados de localização. | Sim | 1.0 |
| AD28 | O sistema deve identificar paradas longas ou desvios de rota inesperados e enviar uma notificação para verificar se está tudo bem. | Sim | 1.0 |
| AD29 | O sistema deve gerar um código de verificação (PIN) que o usuário informa ao motorista antes do início da viagem. | Sim | 1.0 |
| AD30 | A comunicação entre passageiro e motorista deve ser anonimizada dentro do aplicativo, sem expor números de telefone. | Sim | 1.0 |
| AD31 | As informações sensíveis, como dados bancários e de localização, devem ser criptografadas de ponta a ponta. | Sim | 1.0 |


### Referências

> Vazquez, Carlos. Simões, Guilherme. Engenharia de Requisitos. Brasport, 2016. Disponível em: .Acesso em: 11 de outubro de 2025

## Histórico de revisão

| Versão | Data | Descrição | Autor(es) | Revisor(es) | Data da Revisão |
| -- | -- | -- | -- | -- | -- |
| 1.0 | 09/10/2025 | Criação de documento de elicitação por análise documental.| [Caio Sabino](https://github.com/caiomsabino) |   | 09/10/2025 |