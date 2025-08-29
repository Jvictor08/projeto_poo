Abstração: As interfaces Playable e Describable definem o comportamento comum que as classes Video e suas subclasses devem seguir, abstraindo os detalhes de implementação.

Encapsulamento: Atributos como currentTime em Video, videos em Playlist e state em Player são privados, acessíveis apenas por meio de métodos públicos, como getters, setters ou métodos de controle.

Herança: As classes AdVideo e LiveStream herdam de Video, reutilizando atributos e métodos da classe pai, mas adicionando novas propriedades e comportamentos.

Polimorfismo: Os métodos play() e info() foram sobrescritos nas subclasses AdVideo e LiveStream. Quando chamados, eles executam comportamentos distintos dependendo do tipo de objeto, como demonstrado no final do main.ts.

Navegação: Os métodos next(), previous(), play(), pause() e stop() na classe Player gerenciam a reprodução e a navegação da playlist.

Modos (Loop & Shuffle): A lógica de shuffle e loop está implementada no método next(). O shuffleOrder garante a reprodução em ordem aleatória, e o loop faz a playlist voltar ao início.

Histórico: A classe Player mantém um array history privado. Cada vez que um vídeo é tocado, seu título é adicionado ao histórico, que pode ser acessado pelo método getHistory().