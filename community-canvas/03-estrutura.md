# 🔵 Estrutura — O que nos dá estabilidade?

A seção de Estrutura trata dos **alicerces operacionais** que permitem à comunidade existir de forma sustentável no longo prazo. Sem estrutura, até a comunidade mais apaixonada se dissolve.

---

## Governança

> **Como as decisões são tomadas?**

### Modelo colaborativo e aberto

O DevParaná adota um modelo de governança onde **as decisões são discutidas em conjunto**, principalmente nos canais do Slack e nos repositórios do GitHub. Não há uma hierarquia rígida — o modelo é mais próximo de uma meritocracia baseada em contribuição.

### GitHub como plataforma de governança

- **Issues** para reportar problemas e sugerir melhorias
- **Pull Requests** para propor mudanças concretas
- **Discussions** para debates e propostas mais amplas
- **Projects** para organizar e priorizar ideias

> O processo de decisão passa por: ideia → discussão aberta → validação de necessidade/viabilidade/prioridade → implementação

### Admissão de grupos afiliados

O processo é formalizado via pull request no repositório [afiliados](https://github.com/DeveloperParana/afiliados):

1. Candidato abre PR com informações do grupo
2. Organização analisa em até 30 dias
3. Interações acontecem no próprio PR
4. Aprovação vinculada ao aceite das regras do programa

### Código de Conduta como base legal

O [Código de Conduta](https://github.com/DeveloperParana/recursos/blob/main/CODE_OF_CONDUCT.md) é o documento que rege o comportamento esperado em todos os espaços da comunidade. A organização reserva-se o direito de não aceitar contribuições de quem não for um bom cidadão na comunidade.

---

## Liderança

> **Quem lidera e como?**

### Liderança distribuída

O DevParaná funciona com uma **rede de líderes**, não com um líder central. Cada grupo afiliado tem seus próprios organizadores, que contam com o suporte da rede.

### Tipos de líderes

| Tipo | Como se torna | Compromisso |
|---|---|---|
| **Hero da comunidade** | Contribuição recorrente e reconhecimento | Liderança ativa e contínua |
| **Organizador(a) de meetup** | Iniciativa + recorrência mínima bimestral | ~2h/semana |
| **Organizador(a) de conferência** | Convite ou voluntariado | Intensivo no período pré-evento |

### Formação de novos líderes

> _"Forme um time de 2 até 3 pessoas que juntas, dividirão as responsabilidades e manterão tudo sob controle."_

A comunidade incentiva ativamente que organizadores não trabalhem sozinhos. A formação de duplas/trios é uma prática recomendada para:

- Evitar burnout
- Garantir continuidade se alguém precisar se afastar
- Diversificar perspectivas na organização

### Como se tornar voluntário

1. Inscrever-se no [formulário oficial](https://forms.gle/X9bmT5TEnFZdoDAu8)
2. Receber orientações por e-mail
3. Conectar-se com a rede de líderes
4. Começar a contribuir no tipo de voluntariado escolhido

---

## Canais de Comunicação

> **Como a informação flui?**

### Canais ativos

| Canal | Uso principal |
|---|---|
| **Slack** ([slack.devparana.org](https://slack.devparana.org/)) | Comunicação do dia a dia, networking, dúvidas, coordenação |
| **GitHub** ([DeveloperParana](https://github.com/DeveloperParana)) | Código, documentação, propostas, decisões formais |
| **Meetup.com** ([developerparana](https://www.meetup.com/pt-BR/developerparana/)) | Divulgação e RSVP de eventos (5.000+ membros) |
| **Instagram** ([@devparana](https://www.instagram.com/devparana/)) | Divulgação visual, stories de eventos, alcance de novos membros |
| **Google Ads** | Publicidade direcionada por cidade para eventos locais |
| **E-mail** | Comunicações oficiais via @codaqui.dev / @devpr.org |

### Princípio da comunicação

A informação deve fluir de forma **transparente e acessível**. Decisões não devem acontecer em conversas privadas — se é sobre a comunidade, deve estar em um canal aberto.

### Dica para organizadores

Ao divulgar eventos:
- Contate coordenadores de cursos de TI das universidades locais
- Peça para empresas divulgarem internamente
- Use Facebook, Instagram e LinkedIn
- Estimule participantes a compartilharem

---

## Recursos e Financiamento

> **Com que recursos contamos?**

### Modelo financeiro

O DevParaná opera **sem fins lucrativos**. Os recursos vêm de:

1. **Patrocínios de empresas** — principalmente para coffee break e infraestrutura de eventos
2. **Programa de afiliados** — R$ 50,00 por meetup para alimentação (quando não há patrocinador)
3. **Parcerias** — empresas cedem espaço, universidades emprestam auditórios
4. **Associação Codaqui** — entidade que formaliza parcerias institucionais

### Regras para uso de recursos

- Verbas destinadas a eventos são **exclusivamente para coffee break**
- Sobras devem ser **devolvidas**
- Bebidas alcoólicas **nunca** são custeadas pelo DevParaná
- Prestação de contas no **dia seguinte** ao evento

### Benefícios para voluntários

Os voluntários ativos recebem acesso a uma lista de parceiros e recursos:

| Benefício | Detalhes |
|---|---|
| Parceiros para local | Lista de empresas e auditórios disponíveis |
| Verba para coffee | Mediante regras do programa de afiliados |
| Certificados | Emissão para participantes dos eventos |
| Meetup.com | Acesso como organizador (5.000+ membros) |
| Divulgação | Google Ads direcionado por cidade |
| E-mail institucional | @codaqui.dev com alias @devpr.org |
| Ferramentas premium | Canva, Gemini, Figma, JetBrains, Holopin, GitHub |
| Brindes | Para sorteios nos eventos (conforme disponibilidade) |

### Parcerias com empresas

> _"As empresas querem atrair talentos e os eventos são uma forma de mostrar ao público seu espaço e cultura. Você não fica em débito com a empresa — isso não é um favor."_

Para gerenciar parcerias de local, mantenha uma lista com:
- Nome da empresa
- Capacidade máxima
- Contato interno
- Observações para a próxima reserva

---

## Operações e Sustentabilidade

> **Como mantemos tudo funcionando?**

### Ferramentas e infraestrutura técnica

| Ferramenta | Uso |
|---|---|
| **GitHub Organizations** | Repositórios, projetos, documentação, CI/CD |
| **Nx Workspaces** | Monorepo para projetos de software (devmx, recursos) |
| **Conventional Commits** | Padronização de mensagens de commit |
| **Husky + Commitlint** | Automação de qualidade de código |
| **Semantic Release** | Versionamento automático |
| **Slack** | Comunicação e coordenação |
| **Meetup.com** | Gestão de eventos e RSVP |

### Documentação como alicerce

Toda a operação é documentada em repositórios públicos:

- **[afiliados](https://github.com/DeveloperParana/afiliados)** — Regras do programa, manual do voluntário, guia para criação de meetups
- **[recursos](https://github.com/DeveloperParana/recursos)** — Ferramentas, design system, guia de contribuição
- **[devmx](https://github.com/DeveloperParana/devmx)** — Plataforma de member experience

### Sustentabilidade organizacional

A sustentabilidade do DevParaná depende de:

1. **Renovação de liderança** — Novos voluntários são constantemente formados
2. **Descentralização** — Não depender de uma pessoa ou cidade
3. **Documentação** — Qualquer pessoa consegue entender e replicar o que fazemos
4. **Baixa barreira de entrada** — Qualquer pessoa pode começar a contribuir
5. **Automação** — Ferramentas que reduzem trabalho manual (certificados, CI/CD, conventional commits)

### Riscos e mitigações

| Risco | Mitigação |
|---|---|
| Burnout de organizadores | Times de 2-3 pessoas; rotação de responsabilidades |
| Dependência de uma pessoa | Documentação aberta; múltiplos admins no GitHub |
| Falta de palestrantes | Curadoria ativa; incentivo a first-time speakers |
| Perda de espaço para eventos | Lista compartilhada de parceiros; rotação de locais |
| Desengajamento de membros | Eventos regulares; comunicação ativa no Slack; novos formatos |

### Checklist operacional para meetups

Para quem está organizando um meetup, os passos são:

- [ ] Definir **data e hora** (preferência: terça ou quinta, 19h-21h)
- [ ] Confirmar **local** (empresa, universidade ou auditório)
- [ ] Garantir **conteúdo** (C4P ou curadoria)
- [ ] Organizar **coffee break** (patrocínio ou verba de afiliados)
- [ ] **Divulgar** (Meetup.com, Slack, redes sociais, universidades, empresas)
- [ ] **Executar** o evento com entusiasmo, independente do público
- [ ] **Prestar contas** das verbas utilizadas no dia seguinte
- [ ] **Emitir certificados** para os participantes
- [ ] **Agradecer** palestrantes, anfitriões e participantes

---

## Perguntas para reflexão

1. A comunidade sobreviveria se os atuais líderes se afastassem?
2. Novos voluntários conseguem entender como contribuir sem perguntar a ninguém?
3. Os recursos financeiros estão sendo usados de forma transparente?
4. Estamos formando novos líderes ativamente ou esperando que apareçam?
5. Nossas ferramentas e processos simplificam ou burocratizam o trabalho?
