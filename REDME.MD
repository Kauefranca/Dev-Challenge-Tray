# DEV CHALLENGE TRAY UNIMAR
Integrantes: Eduardo Vinícius dos Santos Menezes – 1959642, Gustavo Leite Gasperetti – 1961675, Kauê da Silva França – 1964011, Samuel dos Santos Costa – 1969203.

# DESAFIO
“Aumentar as vendas de uma loja virtual, buscando fechar pedidos de clientes que abandonaram os produtos em seus carrinhos de compras.”

# SÍNTESE DA IDEIA
A nossa ideia consiste em alternativas de finalização de compra, alternando desde o desconto em uma tentativa de fechamento no site até uma ligação oferecendo os produtos de carrinho com um preço especial, utilizando o método de desconto progressivo.

# DESENVOLVIMENTO DA	 SOLUÇÃO
A partir do carrinho de compras com os produtos abandonados pelo cliente, abordamos diversos métodos para que o cliente se sinta motivado para finalizar a compra. A primeira abordagem é caso seja sua primeira compra no estabelecimento, oferecendo um cupom de desconto de 3% aplicado no carrinho.
Se o cliente ainda assim decidir fechar a aba da loja, antes de ele realizar essa ação, aparecerá um pop-up chamativo no centro da página, com um timer disponibilizando um breve desconto de 3% para aquele carrinho.
Caso o cliente não finalize a compra, e feche o site da loja, após um curto período de tempo (aproximadamente 5 – 10 minutos), será encaminhado para o seu e-mail um desconto de porcentagem maior (5%), em relação às propostas anteriores.
Após algumas horas desde que o cliente abandonou o carrinho, e a compra não foi fechada, será enviado um link com um desconto ainda maior de 7% com a inclusão de frete grátis, limitado até 20 reais, para o número de WhatsApp cadastrado anteriormente.
Se após todas as etapas anteriores o cliente não finalizar a compra, um atendente especializado da loja entrará em contato para obter o seu feedback, e por fim oferecer um desconto final máximo de 10%, sendo esse o último recurso da loja para efetuar a venda.

# LINGUAGENS UTILIZADAS
HTML, CSS, JavaScript, JSON, Node.js.

# Enviar mensagem do Whatsapp
    Instalar bibliotecas do package.json
    executar o arquivo ./Fluxos/Whatsapp.js

# HTML com popup
    Abrir arquivo ./checkout-ecommerce-responsivo-master\1.0.carrinho.html

## Imagens

![Fluxograma](/image.png "Fluxograma")