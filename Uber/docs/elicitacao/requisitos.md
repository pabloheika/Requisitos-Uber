---
sidebar_position: 1
sidebar_label: Requisitos
---
# Requisitos elicitados

## Introdução

Este documento consolida todos os requisitos funcionais e não funcionais elicitados pelas técnicas de [Análise Documental](Tecnicas/analisedocumental.md) e [Observação](Tecnicas/observacao.md).

## Metodologia

As tabela apresentam os requisitos funcionais e os não funcionais, com colunas para identificação (RFxx ou RNFxx), descrição do requisito e rastreabilidade (ADxx para análise documental ou OBxx para observação, combinando origens semelhantes).[1] [2]

#### Legendas:

> - RFxx: Requisito Funcional n° xx.
> - RNFxx: Requisito Não Funcional n° xx.
> - ADxx: Análise Documental n° xx.[2]
> - OBxx: Observação n° xx.[1]

### Requisitos Funcionais

| Identificação | Descrição | Rastreabilidade |
|---|---|---|
| RF01 | O aplicativo deve permitir que novos usuários se cadastrem na plataforma. | [OB01][2] |
| RF02 | O aplicativo deve permitir que usuários existentes façam login em suas contas. | [OB02][2] |
| RF03 | O aplicativo deve oferecer a funcionalidade de envio de encomendas. | [OB03][2] |
| RF04 | O aplicativo deve permitir que o usuário visualize seu histórico de pagamentos e atividades. | [OB04][2] |
| RF05 | O aplicativo deve permitir solicitar carros ou motos particulares para transporte de passageiros. | [OB05][2] |
| RF06 | O aplicativo deve exibir a localização de veículos próximos em tempo real. | [OB06][2] |
| RF07 | O aplicativo deve calcular e exibir a estimativa de tempo de viagem antes da confirmação. | [OB07][2]; [OB15][2] |
| RF08 | O sistema deve calcular e exibir o valor estimado da corrida antes da confirmação. | [AD14][1]; [OB08][2] |
| RF09 | O aplicativo deve possuir um sistema de mensagens para comunicação entre usuário e motorista. | [OB09][2] |
| RF10 | O usuário deve poder salvar endereços favoritos para acesso rápido. | [AD05][1]; [OB10][2] |
| RF11 | O usuário deve ser capaz de agendar viagens com até 30 dias de antecedência. | [AD01][1]; [OB18][2] |
| RF12 | O sistema deve permitir ao usuário visualizar, editar ou cancelar viagens agendadas antes do horário programado. | [AD06][1] |
| RF13 | O aplicativo deve notificar motoristas disponíveis sobre viagens agendadas próximas, permitindo que aceitem antecipadamente. | [AD08][1] |
| RF14 | O sistema deve permitir que o usuário configure viagens recorrentes para horários e dias fixos. | [AD13][1] |
| RF15 | O usuário deve poder adicionar várias paradas ao agendar uma viagem. | [AD15][1] |
| RF16 | O usuário deve poder adicionar ou alterar paradas durante uma viagem em andamento. | [AD02][1] |
| RF17 | O aplicativo deve permitir a divisão do valor da corrida com outros passageiros. | [AD03][1] |
| RF18 | O usuário deve poder escolher entre diferentes categorias de veículos (ex.: UberX, Comfort, Black). | [AD04][1] |
| RF19 | O aplicativo deve enviar notificações de lembrete para viagens agendadas com antecedência. | [AD07][1] |
| RF20 | O usuário deve poder compartilhar o status e o trajeto da viagem em tempo real com contatos de confiança. | [AD26][1]; [OB12][2] |
| RF21 | O usuário deve ter acesso a um botão de emergência que acione autoridades locais e o suporte da plataforma. | [AD27][1] |
| RF22 | O aplicativo deve permitir que o usuário envie alertas de segurança ou feedback sobre o motorista diretamente ao suporte. | [AD32][1] |
| RF23 | O aplicativo deve exibir em tempo real o trajeto, o tempo estimado e a localização atual do veículo durante a viagem. | [AD09][1] |
| RF24 | O aplicativo deve oferecer a opção de gravar o áudio da corrida. | [OB11][2] |
| RF25 | O aplicativo deve permitir que usuárias mulheres selecionem motoristas mulheres. | [OB13][2] |
| RF26 | O aplicativo deve permitir o cadastro de cartões de crédito e débito como forma de pagamento. | [OB14][2] |
| RF27 | O aplicativo deve permitir ao usuário manter um saldo em reais e utilizá-lo para pagamentos. | [OB16][2] |
| RF28 | O aplicativo deve permitir a assinatura de um serviço de benefícios (ex.: Uber One). | [OB17][2] |
| RF29 | O aplicativo deve exibir um mapa interativo para visualização de rotas e veículos. | [OB19][2] |
| RF30 | O sistema deve permitir ao usuário avaliar viagens passadas e deixar feedback sobre o motorista. | [AD10][1] |
| RF31 | O sistema deve permitir o cancelamento de viagens, aplicando políticas de taxa quando aplicável. | [AD11][1] |
| RF32 | O aplicativo deve disponibilizar uma lista com o histórico de viagens, incluindo datas, valores e motoristas. | [AD12][1] |

### Requisitos Não Funcionais

| Identificação | Descrição | Rastreabilidade |
|---|---|---|
| RNF01 | O sistema deve processar solicitações de agendamento em até 3 segundos. | [AD16][1] |
| RNF02 | O sistema deve manter disponibilidade mínima de 99,5% para o serviço de agendamento. | [AD17][1] |
| RNF03 | A interface de agendamento deve ser intuitiva e acessível em até três toques a partir da tela inicial. | [AD18][1] |
| RNF04 | Todos os dados de pagamento e localização devem ser criptografados de ponta a ponta. | [AD19][1]; [AD31][1]; [OB20][2] |
| RNF05 | O aplicativo deve funcionar corretamente em Android 8 ou superior e iOS 13 ou superior. | [AD20][1]; [OB22][2] |
| RNF06 | O sistema deve suportar simultaneamente até 1 milhão de usuários ativos agendando viagens. | [AD21][1] |
| RNF07 | O código do módulo de agendamento deve seguir boas práticas com arquitetura modular e documentação interna. | [AD22][1] |
| RNF08 | O aplicativo deve integrar-se a APIs externas de mapas e serviços de pagamento. | [AD23][1] |
| RNF09 | O usuário deve poder acessar histórico e agendar viagens 24 h por dia, 7 dias por semana. | [AD24][1] |
| RNF10 | O aplicativo deve estar em conformidade com a LGPD, exigindo consentimento explícito para uso de dados. | [AD25][1]; [OB32][2] |
| RNF11 | O sistema deve identificar paradas longas ou desvios inesperados e notificar o usuário. | [AD28][1] |
| RNF12 | O sistema deve gerar um código PIN que o usuário informa ao motorista antes do início da viagem. | [AD29][1] |
| RNF13 | A comunicação entre passageiro e motorista deve ser anonimizada dentro do aplicativo. | [AD30][1] |
| RNF14 | A interface de mensagens deve carregar em menos de 2 segundos em 95% dos casos. | [OB21][2] |
| RNF15 | O sistema de rastreamento de encomendas deve retornar o status em menos de 5 segundos para 95% das consultas. | [OB23][2] |
| RNF16 | A busca por veículos deve ter precisão de localização de até 200 metros de raio. | [OB24][2] |
| RNF17 | O cálculo de preços e prazos de viagem deve ser concluído em menos de 2 segundos para 95% das consultas. | [OB25][2] |
| RNF18 | O sistema deve seguir as diretrizes de acessibilidade WCAG 2.1 nível AA. | [OB26][2] |
| RNF19 | A interface deve ser projetada para ser intuitiva e fácil de usar por pessoas idosas. | [OB27][2] |
| RNF20 | O sistema deve garantir integridade e precisão dos dados, prevenindo corrupção ou perda de informações. | [OB28][2] |
| RNF21 | O sistema deve passar por manutenções e atualizações regulares para corrigir bugs e melhorar desempenho. | [OB29][2] |
| RNF22 | O sistema deve ser escalável para lidar com picos de tráfego sem comprometer a disponibilidade. | [OB30][2] |
| RNF23 | As informações de localização no mapa devem ser atualizadas com latência máxima de 300 ms. | [OB31][2] |
| RNF24 | A localização do veículo no mapa deve ser atualizada em tempo real, com atraso máximo de 5 segundos. | [OB33][2] |
| RNF25 | A precisão da localização de usuário e motorista deve ter erro máximo de 10 metros. | [OB34][2] |

## Bibliografia

> 1. Analise Documental 2025. **Requisitos Uber**. Disponível em :  [Analise Documental][1]. Acesso em: 16 de Outubro de 2025
>
> 2. Observação 2025. **Requisitos Uber**. Disponível em :  [Observação][2]. Acesso em: 16 de Outubro de 2025



## Histórico de revisão

| Versão | Data | Descrição | Autor(es) | Revisor(es) | Data da Revisão |
| -- | -- | -- | -- | -- | -- |
| 1.0 | 16/10/2025 | Criação de documento de requisitos elicitados.| [Pablo S. Costa](https://github.com/pabloheika)  |   |  |

[1]: Tecnicas/analisedocumental.md
[2]: Tecnicas/observacao.md