# AVALIAÇÃO FINAL
# DESENVOLVIMENTO DE APLICAÇÕES PARA INTERNET


Aluno: Manoel Belmiro da Silva Neto

Matrícula: 01485731

Curso: Análise e desenvolvimento de sistemas

Professor: Daivid Leal



**1 - O que é uma Activity?**

R = As Activities existem desde a primeira versão do Android, que foi lançado em 2008. Basicamente, as Activities existem como uma estrutura responsável por criar as views e receber as interações com o usuário, cada aplicativo criado tem pelo menos uma Activity, se por acaso algum aplicativo criado possuir duas telas é provável que ele terá duas Activities diferentes para construir cada tela. E diferente de alguns outros padrões de programação, em que é preciso de um bloco "main" para começar a executar a aplicação, no Android a gente começa a aplicação por uma instancia de uma Activity, então basicamente a nossa Activity também é a porta de entrada da nossa aplicação.

**2 - Como funciona o ciclo de vida de uma activity?**



R = Quando uma aplicação é iniciada, nela existe todo um processo de ciclo de vida em que as instâncias da classe Activity transitam. Para navegar entre as fases do ciclo de vida da atividade, a classe Activity fornece um conjunto principal de seis "Callbacks", sendo eles: onCreate ( ), onStart ( ), onResume ( ), onPause ( ), onStop ( ) e onDestroy ( ), que permite que a atividade saiba sobre a mudança do estado, e conforme a atividade entra em um novo estado o sistema invoca cada um desses "Callbacks", e para cada ciclo ou método desses é possível implementar sua programação específica, seus códigos. Então depois que você inicia a aplicação, ela entra no processo chamado "Activity Launched" que é quando a Activity é lançada, e dentro da Activity ela vai executar o método "onCreate ( )" que é o primeiro método do ciclo de vida que é executado, ele só é executado uma única vez e só será executado uma outra vez se caso a Activity for destruída, nele é possível iniciar algumas variáveis, atributos, objetos e talvez até iniciar um processo em segundo plano. Logo após o "onCreate ( )" vem o método "onStart ( )", neste método a tela está pronta e aparece para o usuário, em seguida vem o "onResume ( )", nesse estado o aplicativo interage com o usuário, e o aplicativo permanece nesse estado até que algo afete o foco do app. Depois desses métodos ou estados do ciclo de vida, a Activity entra no processo chamado "Activity running" que é quando ela está de fato rodando, se por acaso a Activity principal for colocada em segundo plano ela entrará no estado "onPause ( )" e ficará aguardando uma ação, ela pode retornar para a Activity principal e aí o método "onResume ( )" será executado e a Activity estará rodando novamente, ou se por acaso outro aplicativo for colocado em primeiro plano e este aplicativo precisar de mais memória e sua aplicação estiver muito tempo em segundo plano, o método irá "matar" a sua aplicação e quando você retornar para ela, é nesse momento em que o método 'onCreate ( )" será executado mais uma vez e seguirá o mesmo processo do início. Seguido do estado "onPause ( )", se caso a sua aplicação permanecer em segundo plano por muito tempo, ela entrará no estado "onStop ( )" e aí se alguma outra aplicação precisar de mais memória a sua aplicação será destruída e seguirá o mesmo processo anterior, ou se caso a sua aplicação for colocada em segundo plano e depois você retornar para a tela em que ela foi parada, o método "onRestart ( )" será executado e logo em seguida o método "onStart ( )" e o "onResume ( )" e assim a Activity estará rodando novamente. Se por acaso a aplicação estiver no "onStop ( )" por muito tempo sem fazer nada, o estado "onDestroy ( )" será executado e a aplicação será desativada.

**3 - O que é e qual a função do Adapter e do Viewholder?**



R = O Adapter é uma classe que intermedia a criação de listas, e também lida com outros tipos de componentes. Basicamente, um Adapter funciona como uma ponte entre uma AdapterView e dos dados que são destinados para essa View, ele também é responsável por fazer uma exibição para cada item no conjunto de dados. Ou seja, um Adapter representa a ligação entre a View e alguma fonte de dados, geralmente ele vem em dois tipos: Os que representam dados baseados em Array's, e aqueles que representam os dados baseados em cursor. Já a ViewHolder é uma classe que irá segurar as informações da view, é utilizado para manter uma referência aos ID's de componentes que foram criados no Layout (View). Com isso, é possével ter uma ligação para cada item da lista bem como o que vai acontecer com cada componente dentro desse item.

**4 - O que é Retrofit e por que utilizar ao invés de criar as chamadas manualmente?**



R = O Retrofit é uma biblioteca open-source para consumo de APIs e para Networking de forma geral, com ela é possível criar requisições e utilizar nossa aplicação como um Client HTTP de forma rápida e simplificada. o Retrofit utiliza a API GSON para fazer o parser, que é a conversão da String em formato JSON em um objeto Java, o GSON faz isso de forma simples. Mas, se quiser, também é possível você mesmo implementar seu próprio parser utilizando os recursos nativos do próprio Android. Uma das maiores vantagens de se utilizar o Retrofit é a maneira simples de se implementar, economizando várias linhas, deixando o código mais limpo e com foco apenas nas regras de negócio, as chamadas para o serviço são feitas com base em uma interface, e o que torna essa simplicidade possível é a utilização de anotações. Na interface, na assinatura do método, é passado uma anotação com o método http que será utilizado na requisição sendo elas: @GET(“url”), @POST(“url”), @PUT(“url”) e @DELETE(“url”).
