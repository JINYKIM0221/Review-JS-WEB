const quotes = [
    {
    quote: 'I never dreamed about success, I worked for it',
    author: 'Estee Lauder'
    },
    {
    quote: 'Do not try to be original, just try to be good.',
    author: 'Paul Rand'
    },
    {
    quote: 'Do not be afraid to give up the good to go for the great',
    author: 'John D. Rockefeller'
    },
    {
    quote: 'If you cannot fly then run. If you cannot run, then walk. And if you cannot walk, then crawl, but whatever you do, you have to keep moving forward.',
    author: 'Martin Luther King Jr.'
    },
    {
    quote: 'Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.',
    author: 'Thomas Edison'
    },
    {
    quote: 'The fastest way to change yourself is to hang out with people who are already the way you want to be',
    author: 'REid Hoffman'
    },
    {
    quote: 'Money is like gasoline during a road trip. You do not want to run out of gas on your trip, but you are not doing a tour of gas stations',
    author: 'Tim O Reilly'
    },
    {
    quote: 'Some people dream of success, while other people get up every morning and make it happen',
    author: 'Wayne Huizenga'
    },
    {
    quote: 'The only thing worse than starting something and falling.. is not starting something',
    author: 'SEth Godin'
    },
    {
    quote: 'If you really want to do something, you will find a way. If you do not, you will find an excuse.',
    author: 'Jim Rohn'
    },
    ];

    const quote = document.querySelector("#quote span:first-child");
    const author = document.querySelector("#quote span:last-child");

    const todaysquote = quotes[Math.floor(Math.random()* quotes.length)];

    quote.innerText = todaysquote.quote;
    author.innerText = todaysquote.author;

    //quotes라는 array에 {quote:,author}를 넣어준다
    //html에 dvi id="quote"를 작성한 뒤 const로 quote,author를 변수에 저장해주고 div의 자식인 span에 넣어준다
    //quotes안에 있는 명언과 작가들이 랜덤하게 나오고 싶다
    //Math.floor() : 안 숫자 소수점아래를 버린다
    //Math.random() : 0~1까지 랜덤한 숫자가 나오게 된다
    //quotes.length : quotes array의 요소 갯수를 알려준다
    //quotes[Math.floor(Math.random()* quotes.length)]작성 함으로써 quote[숫자]가 랜덤하게 나올 수 있게해줌

    //quote와 author이 있는 span에 각각 text를 넣어준다
    