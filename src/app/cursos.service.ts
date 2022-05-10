import { Injectable } from '@angular/core';
import { Question, QuestionAnswer } from './models/question';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class CursosService {
  questionsEtim: Question[] = [
    {
      title: 'Em geral, quais as relações entre eletrônica e DS?',
      description: '',
      answers: [
        { description: 'Apenas nos sites.', isRight: false },
        { description: 'Apenas nos apps.', isRight: false },
        { description: 'Sites, apps, Banco de dados, construção de PC, design e programação.', isRight: true },
        { description: 'Nenhuma das alternativas.', isRight: false },
      ]
    },
    {
      title: 'Qual linguagem de programação aprenderam e utilizam em eletrônica?',
      description: 'Os apps e sites feitos em eletrônica envolvem programação.',
      answers: [
        { description: 'HTML e Java', isRight: false },
        { description: 'C# e Javascript', isRight: false },
        { description: 'Python, php e Html.', isRight: false },
        { description: 'C e HTML', isRight: true },
      ]
    },
    {
      title: 'Quais construções de eletrônica que fizeram ao decorrer do curso que utilizaram uma certa programação para funcionar.',
      description: '',
      answers: [
        { description: 'Construção do LCD (Liquid Crystal Display), Leds, além de sites e apps.', isRight: true },
        { description: 'Construção de brinquedos.', isRight: false },
        { description: 'Construção de Robôs.', isRight: false },
        { description: 'Nenhuma das alternativas.', isRight: false },
      ]
    },
    {
      title: 'Como hardware e software se relacionam?',
      description: '',
      answers: [
        { description: 'Eles não se relacionam.', isRight: false },
        { description: 'O hardware destina-se a executar a tarefa no nível da máquina,enquanto o software fornece instruções para o hardware.', isRight: true },
        { description: 'O software destina-se a executar a tarefa no nível da máquina, enquanto o hardware fornece instruções para o software.', isRight: false },
        { description: 'Todas as alternativas estão corretas.', isRight: false },
      ]
    },
    {
      title: 'DS tem relação com Eletro.',
      description: '',
      answers: [
        { description: 'Não tem relação.', isRight: false },
        { description: 'Não muito, só na parte de Programação.', isRight: false },
        { description: 'Tem uma grande relação.', isRight: true },
        { description: 'São a mesma coisa', isRight: false },
      ]
    }
  ];
  questionsAdm: Question[] = [
    {
      title: ' Qual forma de armazenamento de dados utilizado por DS e Adm?',
      description:'DS e Adm ambas mexem com armazenamentos de dados.',
      answers: [
        {description: 'Só salvo, porém num aplicativo ou site que os dados são compartilhados.', isRight: false},
        {description: 'No Banco de Dados, cujo os dados são particulares.', isRight: true},
        {description: 'Sites particulares, que os dados serão armazenados sem perigo algum.', isRight: false},
        {description: 'Nenhuma das alternativas', isRight: false},
      ]
  },
  {
      title: 'Porque os sites e os Bancos de dados são importantes na administração?',
      description:'',
      answers: [
        {description: 'Pois é uma forma de pesquisarmos sobre os temas diversos e armazenar  os dados.', isRight: true},
        {description: 'São usados mas não são importantes.', isRight: false},
        {description: 'Não sao usados nem são importantes', isRight: false},
        {description: 'Apenas utilizamos sites, os Bancos de dados não estão envolvidos', isRight: false},
      ]
  },
  {
      title: 'Quais apps são utilizados na administração com relação aos Bancos de dados?',
      description:'',
      answers: [
        {description: 'apenas access', isRight: false},
        {description: 'apenas excel', isRight: false},
        {description: 'excel e word', isRight: false},
        {description: 'excel e access', isRight: true},
      ]
  },
  {
      title: 'Qual a importância do Excel e access na administração para os Bancos de dados?',
      description:'',
      answers: [
        {description: 'O Banco de dados e administração não tem ligação alguma.', isRight: false},
        {description: 'São importantes para armazenar os dados em tabelas ou planilhas envolvendo o Banco de dados.', isRight: true},
        {description: 'Os apps não salvam os dados e assim eles são perdidos.', isRight: false},
        {description: ' Nenhuma das alternativas anteriores.', isRight: false},
      ]
  },
  {
      title: 'Que tipo (s) de administração tem em DS?',
      description:'',
      answers: [
        {description: 'Administração de Banco de Dados, Scrum Master e Administração de redes', isRight: true},
        {description: 'Administração de Banco de Dados e Administração de redes', isRight: false},
        {description: 'Apenas administração de redes', isRight: false},
        {description: 'nao tem', isRight: false},
      ]
  }
  ];
  questionsSj: Question[] = [
    {
      title: 'Qual dos sites abaixos pode ser usados para organizar documentos juridicos utilizando um banco de dados?',
      description:'organizacao, digitalizacao entre outros',
      answers: [
        {description: 'W3K DRIVING DIGITAL TRANSFORMATION', isRight: true},
        {description: 'WIKIPÉDIA', isRight: false},
        {description: 'YAPOLI', isRight: false},
        {description: 'AMAZON MANAGEMENT', isRight: false},
      ]
  },
  {
      title: 'Algo bem importante em qualquer area de SJ é o gerenciamento de arquivos, em qual das opções isso pode ser feito de melhor forma?',
      description:'',
      answers: [
        {description: 'Papel e Caneta', isRight: false},
        {description: 'Um Banco de Dados', isRight: true},
        {description: 'WIKIPÉDIA', isRight: false},
        {description: 'CERÉBRO', isRight: false},
      ]
  },
  {
      title: 'Existem alguns metodos de se fazer uma denuncia, em qual das opções abaixo uma denuncia pode ser feita?',
      description:'Denuncias de varios tipos podem ser feitas atraves da internet',
      answers: [
        {description: 'Sites e Apps para denuncia', isRight: true},
        {description: 'WIKIPÉDIA', isRight: false},
        {description: 'Site do Governo', isRight: false},
        {description: 'Brainly', isRight: false},
      ]
  },
  {
      title: 'Por que a digitalização de documentos e utilização de serviços de organização de dados são importantes em SJ?',
      description:'',
      answers: [
        {description: 'Facilitação ao atualizar documentos, organiza-los e acessa-los', isRight: true},
        {description: 'Deixar Bonito', isRight: false},
        {description: 'Entrar na area digital', isRight: false},
        {description: 'Estar na web', isRight: false},
      ]
  },
  {
      title: 'Por que a entrada de informações legais e documentos do tipo são importantes estarem de facil acesso na internet?',
      description:'',
      answers: [
        {description: 'Para que todos tenham acesso a seus dados', isRight: false},
        {description: 'Para facilitar o acesso a dados juridicos e pessoais e serem atualizados mais facilmente', isRight: true},
        {description: 'Para estarem na web', isRight: false},
        {description: 'Para serem vendidos', isRight: false},
      ]
  }
  ];
  questionsDg: Question[] = [
    {
        title: 'O que é SVG e qual seu uso',
        description:'',
        answers: [
          {description: 'é um formato de arquivo usado para a criação de logotipos, ícones e elementos interativos', isRight: true},
          {description: 'é um desenho usado pra brincar com imagens', isRight: false},
          {description: 'é um formato de arquivo usado para a criação de programa', isRight: false},
          {description: 'é um Token não fungível usado no mercado do web', isRight: false},
        ]
    },
    {
        title: 'Que materia de Ds tem um grande relacao com Dg?',
        description:'',
        answers: [
          {description: 'Programacao em moblie', isRight: false},
          {description: 'Informatica', isRight: false},
          {description: 'Desenvolvimento de Sistemas', isRight: false},
          {description: 'Design Digital', isRight: true},
        ]
    },
    {
        title: 'O que um designer digital faz acessamos?',
        description:'O designer digital atua no ramo da programação visual dos meios digitais',
        answers: [
          {description: 'Brinquedos, moveis, poster fisicos, hardwrae', isRight: false},
          {description: 'Sites, aplicativos, e-books, jogos de videogame, ou uma interface digital', isRight: true},
          {description: 'Bancos, casas, lojas, bibliotecas, escolas', isRight: false},
          {description: 'Nenhuma das alternativas', isRight: false},
        ]
    },
    {
        title: 'Que outro formato que podemos comparar o SVG',
        description:'SVG proporciona altíssima qualidade de imagem, é extremamente escalável, ideal para manter a aparência dos sites em diversos tamanhos de tela.',
        answers: [
          {description: 'PH', isRight: false},
          {description: 'TS', isRight: false},
          {description: 'PNG', isRight: true},
          {description: 'PDF', isRight: false},
        ]
    },
    {
        title: 'Qual o nome do layout do site?',
        description:'',
        answers: [
          {description: 'Flowcarts', isRight: false},
          {description: 'Wareframe', isRight: true},
          {description: 'Software', isRight: false},
          {description: 'Mapamental', isRight: false},
        ]
    }
  ];
  questionsEv: Question[] = [
    {
      title: 'Quais programa(s) vocês mais utilizam em eventos?',
      description:'',
      answers: [
        {description: 'Canva', isRight: false},
        {description: 'Power point', isRight: false},
        {description: 'Canva e Power point', isRight: true},
        {description: 'Word e Excel', isRight: false},
      ]
  },
  {
      title: 'Quais projetos feitos em eventos que envolvem o Canva e o Power point?',
      description:'',
      answers: [
        {description: 'Pré-evento', isRight: true},
        {description: 'Confecção de convites', isRight: false},
        {description: 'Sites', isRight: false},
        {description: 'Todas as alternativas estão corretas.', isRight: false},
      ]
  },
  {
      title: 'Qual o papel dos sites programados que vocês utilizam em eventos?',
      description:'',
      answers: [
        {description: 'Divulgação e Marketing', isRight: true},
        {description: 'Divulgar os produtos de supermercado.', isRight: false},
        {description: 'Ensinar como programar', isRight: false},
        {description: 'Nenhuma das alternativas anteriores.', isRight: false},
      ]
  },
  {
      title: 'Quando um evento vai acontecer, é correto afirmar que sites, plataformas e diversas redes sociais são utilizados para na divulgação?',
      description:'',
      answers: [
        {description: 'Não, essas três formas de divulgação não são eficientes.', isRight: false},
        {description: 'Sim, mas as redes sociais não se inclui.', isRight: false},
        {description: 'Sim, nós utilizamos sites, plataformas e diversas redes sociais como o Instagram para divulgação', isRight: true},
        {description: 'Nenhuma das anteriores.', isRight: false},
      ]
  },
  {
      title: 'Se não existisse programador e as redes sociais não fossem criadas, dificultaria a divulgação de um evento?',
      description:'',
      answers: [
        {description: 'Não, seria divulgado da mesma forma.', isRight: false},
        {description: 'Sim, o processo seria muito mais lento e atrairia bem menos pessoas para o evento.', isRight: true},
        {description: 'Sim, mas só seria um pouco pior.', isRight: false},
        {description: 'Todas estão corretas.', isRight: false},
      ]
  }
  ];
  questionsHum: Question[] = [
    {
        title: 'Assinale a escolha mais antiética a se fazer na internet.',
        description:'',
        answers: [
          {description: 'Não praticar o cyberbullying', isRight: false},
          {description: 'Contribuir com a disseminação de informações verdadeiras', isRight: false},
          {description: 'Fazer ações de proteção da fauna e flora nas redes sociais', isRight: false},
          {description: ' Praticar o Doxx (Vazamento de Dados)', isRight: true},
        ]
      },
    {
        title: 'Assinale a alternativa mais viável para se realizar o descarte de lixo eletrônico:',
        description:'DS utilizam frequentemente PCs para realizar seu trabalho. Porém a vida de seu hardware não é tão longa e o descarte incorreto pode acarretar em sérios impactos ambientais',
        answers: [
          {description: 'Leve ao ponto de coleta de lixo eletrônico mais próximo de sua residência', isRight: true},
          {description: 'Separe o lixo eletrônico em uma sacola de lixo para, então, ser devidamente tratada pelos lixeiros', isRight: false},
          {description: 'Desmonte-o e misture-o com o lixo comum', isRight: false},
          {description: 'Descarte o hardware em um terreno baldio e deixe a natureza fazer sua decomposição', isRight: false},
        ]
    },
   {
        title: 'Que tipo de rede utilizamos no nosso dia-a-dia feito com programacao',
        description:'',
        answers: [
          {description: 'Redes de Pesca', isRight: false},
          {description: 'Redes Sociais', isRight: true},
          {description: 'Redes Biblicos', isRight: false},
          {description: 'Redes de Descansar', isRight: false},
        ]
    },
   {
        title: 'Para um trabalhador da area de Banco de Dados tem uma regra basica de etica, qual essa regra?',
        description:'',
        answers: [
          {description: 'Ser frio de calculista', isRight: false},
          {description: 'Nao tem regra de etica', isRight: false},
          {description: 'Pode falar dos dados da empresa para quem perguntar', isRight: false},
          {description: 'Tem que manter os dados da empresa privados', isRight: true},
        ]
    },
   {
        title: 'É ético se apropriar de um Software Livre e distribuí-lo como sendo de sua autoria?',
        description:'Software Livre é e um softwera gratuito que qualquer pessoa pode usar',
        answers: [
          {description: 'Não, mesmo sendo livre o criador ainda tem os creditos de ter feito', isRight: true},
          {description: 'Sim, é gratuito', isRight: false},
          {description: 'Sim, se ta no meu pc é meu', isRight: false},
          {description: 'Não, não precisa dar creditos mas não pode tomar para si', isRight: false},
        ]
    }
  ];
  questionsBio: Question[] = [
    {
      title: 'Qual sistema do nosso corpo humano pode ser comparado às partes do computador: HD e Memória RAM?',
      description:' O computador é como um corpo humano artificial <br> HD: Armazenamento das informações. <br> Ram: Usa as informações para ajir',
      answers: [
        {description: 'Sistema Nervoso', isRight: true},
        {description: 'Sistema Cardiovascular', isRight: false},
        {description: 'Sistema Endócrino', isRight: false},
        {description: 'Sistema Digestivo', isRight: false},
      ]
  },
  {
      title: 'Qual a principal diferença entre o raciocínio de nosso cérebro em comparação com o de um computador e outros hardwares?',
      description:'Hardware: é parte que é palpável, concreto',
      answers: [
        {description: 'Cérebro humano: raciocínio limitado apenas entre SIM e NÃO. Computador: infinitas possibilidades de escolhas.', isRight: false},
        {description: 'O raciocínio dos dois são os mesmos.', isRight: false},
        {description: 'Não há como compará-los', isRight: false},
        {description: 'Cérebro humano: raciocínio com infinitas possibilidades(ele pode criar mais de duas opções); Computador: raciocínio limitado entre SIM e NÃO.', isRight: true},
      ]
  },
  {
      title: 'Assinale a alternativa mais viável para se realizar o descarte de lixo eletrônico:',
      description:'Desenvolvedores de Sistemas utilizam frequentemente PCs para realizar seu trabalho. Porém a vida de seu hardware não é tão longa e o descarte incorreto pode acarretar em sérios impactos ambientais',
      answers: [
        {description: 'Leve ao ponto de coleta de lixo eletrônico mais próximo de sua residência', isRight: true},
        {description: 'Separe o lixo eletrônico em uma sacola de lixo para, então, ser devidamente tratada pelos lixeiros', isRight: false},
        {description: 'Desmonte-o e misture-o com o lixo comum', isRight: false},
        {description: 'Descarte o hardware em um terreno baldio e deixe a natureza fazer sua decomposição', isRight: false},
      ]
  },
  {
      title: 'Quais desses possíveis dados um satélite com a função de monitorar crises ambientais pode utilizar?',
      description:'Pode-se afirmar que todos os satélites são conectados com algum tipo de sistema, que por sua vez é vinculado a um Banco de Dados',
      answers: [
        {description: 'Imagens detalhadamente captadas de vários locais do mundo, visando na utilização do GPS', isRight: false},
        {description: 'Ondas eletromagnéticas vindas das torres de sua emissora de TV', isRight: false},
        {description: 'Imagens quadro a quadro de alta resolução de uma região de hotspot', isRight: true},
        {description: 'O calor do Sol e sua luz solar', isRight: false},
      ]
  },
  {
      title: 'Mesmo sendo ciências muito distintas entre si, Desenvolvimento de Sistemas e a matéria de Biológicas possuem muitas conexões. Aponte uma conexão.',
      description:'',
      answers: [
        {description: 'Máquinas a vapor e a saúde do trabalhador', isRight: false},
        {description: 'O trator e a agricultura', isRight: false},
        {description: 'O comércio de hardwares e o setor primário (extrativista)', isRight: false},
        {description: 'Sistemas de Planejamento Dosimétrico e radioterapia', isRight: true},
      ]
  }
  ];
  questionsInfo: Question[] = [
    {
      title: 'No ponto de vista da navegação da internet, o que o endereço de IP externo representa para o usuário como um dado?',
      description:'Ds e infonet ambos construem websites',
      answers: [
        {description: ' A classificação de endereço de IP externo não existe, só a de endereço de IP', isRight: false},
        {description: 'O endereço de IP externo não é considerado como dado do usuário', isRight: false},
        {description: 'O endereço IP externo é o identificador único e exclusivo do usuário da rede', isRight: true},
        {description: 'O endereço IP externo apenas representa a individualidade do usuário, mas não é usado como um dado', isRight: false},
      ]
    },
    {
      title: 'Qual destas linguagens de programação ou marcação é utilizada para o layout do site?',
      description:'Ds e infonet ambos construem websites',
      answers: [
        {description: 'HTML', isRight: true},
        {description: 'Java', isRight: false},
        {description: 'Angular', isRight: false},
        {description: 'C', isRight: false},
      ]
    },
    {
      title: 'O que é cookie na web?',
      description:'Ds e Infonet ambas trabalha com cookie.',
      answers: [
        {description: 'É biscoito em inglês', isRight: false},
        {description: 'É um dado do site que é armazenado no servidor local (do usuário)', isRight: true},
        {description: ' É um dado que o site armazena no servidor local até que o usuário saia do site', isRight: false},
        {description: 'É um dado irrelevante que só serve para deixar a internet mais lenta', isRight: false},
      ]
    },
    {
      title: 'Em qual dessas partes da estrutura HTML se conecta a linguagem ao CSS?',
      description:'',
      answers: [
        {description: 'head', isRight: true},
        {description: 'header', isRight: false},
        {description: 'script', isRight: false},
        {description: 'body', isRight: false},
      ]
    },
    {
      title: 'Assinale a escolha mais antiética a se fazer na internet.',
      description:'',
      answers: [
        {description: 'Não praticar o cyberbullying', isRight: false},
        {description: 'Contribuir com a disseminação de informações verdadeiras', isRight: false},
        {description: 'Fazer ações de proteção da fauna e flora nas redes sociais', isRight: false},
        {description: ' Praticar o Doxx (Vazamento de Dados)', isRight: true},
      ]
    }
  ];
  questionsDi: Question[] = [
    {
      title: 'Segundo a teoria das cores RGB (cores aditivas ou luzes coloridas), a mistura das luzes vermelha, azul e verde resulta em qual cor?',
      description:'',
      answers: [
        {description: 'Preta', isRight: false},
        {description: 'Branca', isRight: true},
        {description: 'Marrom', isRight: false},
        {description: 'Verde-arroxeado', isRight: false},
      ]
  },
  {
      title: 'Sendo ambas formas diferentes de aplicar o método do Design, qual o objetivo em comum do Design Digital e do Design de Interiores?',
      description:'o Design Digital molda o layout de sites, softwares e sistemas',
      answers: [
        {description: 'Ambas visam criar imagens, desenhos ou representações que auxiliem, de alguma forma, em sua função e/ou mensagem', isRight: true},
        {description: 'As duas não tem nada em comum', isRight: false},
        {description: 'Ambas são utilizadas para a produção de um produto e seu sucesso de vendas', isRight: false},
        {description: 'Ambas são utilizadas para tornar o produto mais atraente', isRight: false},
      ]
  },
  {
      title: 'Qual das cores abaixo poderia ser utilizada para passar a imagem de alegria e boa recepção em um local?',
      description:'',
      answers: [
        {description: 'Vermelho', isRight: false},
        {description: 'Amarelo', isRight: true},
        {description: 'Azul', isRight: false},
        {description: 'Rosa', isRight: false},
      ]
  },
  {
      title: 'Porque é tão importante, sendo em um interior de um local ou em uma interface gráfica, deixar um espaço considerável entre os elementos?',
      description:'',
      answers: [
        {description: 'Para colocar mais elementos futuramente, se for preciso', isRight: false},
        {description: 'Para preencher com detalhes adicionais', isRight: false},
        {description: 'Para deixar mais bonito, pois assim estimula o cliente a comprar o produto', isRight: false},
        {description: 'Para deixar espaços de alívio visual, facilitando o raciocínio organizacional do local', isRight: true},
      ]
  },
  {
      title: 'Porque Design não pode ser confundido com arte?',
      description:'',
      answers: [
        {description: 'Porque o Design não visa a manifestação dos sentimentos do autor para outros e, sim, a  estimulação das sensações do receptor da obra', isRight: true},
        {description: 'Porque o Design não utiliza as cores para estimular os sentimentos do usuário da obra', isRight: false},
        {description: 'Porque, diferente do Design, o mundo das artes leva em consideração as diferentes percepções de beleza', isRight: false},
        {description: 'Porque o Design não é capaz de abordar temas variados em suas criações', isRight: false},
      ]
  }
  ];
  questionsSec: Question[] = [
    {
      title: 'Se por acaso o seu superior pedir para apresentar um relatório de forma online, qual desses softwares será mais viável para o secretário apresentá-lo?',
      description:'',
      answers: [
        {description: 'Word', isRight: false},
        {description: 'PowerPoint', isRight: true},
        {description: 'Excel', isRight: false},
        {description: 'MS-DOS', isRight: false},
      ]
  },
  {
      title: 'Qual das alternativas abaixo indica um bom planejamento do secretariado com/para a área de T.I.?',
      description:'',
      answers: [
        {description: 'Criar perfis individuais para cada cliente da empresa', isRight: true},
        {description: 'Diminuir a proposta de salário do analista de dados', isRight: false},
        {description: 'Pedir os dados pessoais dos clientes', isRight: false},
        {description: 'Poupar gastos para implementar novas tecnologias na área de T.I.', isRight: false},
      ]
  },
  {
      title: 'Como o Banco de Dados pode facilitar o trabalho de um secretário em uma instituição?',
      description:'',
      answers: [
        {description: 'O secretário pode analisar o desenvolvimento da instituição, mas ele não utiliza os dados presentes de forma prática.', isRight: false},
        {description: 'O secretário é capaz de analisar a produtividade do seu funcionário pelos dados que o sistema capta de sua vida pública', isRight: false},
        {description: 'O secretário utiliza esses dados, do sistema da instituição em que trabalha, para tomar decisões que ajudem no progresso da mesma', isRight: true},
        {description: 'Ele não necessita do Banco de Dados para seu trabalho, já que ele consulta todas as informações que obtêm de sua agenda', isRight: false},
      ]
  },
  {
      title:'Como peça fundamental de uma instituição para desenvolvimento de seus variados setores, qual deles o secretariado deve consultar mais se ele quiser informatizar um outro setor?',
      description:'',
      answers: [
        {description: 'Financeiro', isRight: false},
        {description: 'logística', isRight: false},
        {description: 'Compras', isRight: false},
        {description: 'T.I.', isRight: true},
      ]
  },
  {
      title: 'Para poder auxiliar o secretário no monitoramento dos variados setores de sua instituição, qual das possíveis soluções é a mais viável?',
      description:'',
      answers: [
        {description: 'Criar tabelas de dados de cada setor que se relacionam na Base de Dados', isRight: true},
        {description: 'Arrumar uma semana de seu trabalho para entender o setor', isRight: false},
        {description: 'Aplicar tarefas hipotéticas a cada setor e aprender na tentativa e erro', isRight: false},
        {description: 'Simplesmente, não fazer nada', isRight: false},
      ]
  }
  ];
  constructor() { }
}
