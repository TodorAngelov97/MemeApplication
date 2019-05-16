import { Meme } from './models/meme.model';

export const MEMES: Meme[] = [
    { id: 1, title: ' Cool', image: 'https://www.galveston.com/img/MemberImages/buncha-cool-stuff.jpg' },



    // tslint:disable-next-line: max-line-length



    // tslint:disable-next-line: max-line-length
    { id: 2, title: ' Liolo', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUDA5YyP2kCk8auY7EbhUP9Ux-iVd2AA5iD5ipOYBjJ2WnOTdg' },
    { id: 3, title: ' Eee ne', image: 'https://i.ytimg.com/vi/ygdzjB0Ka5w/maxresdefault.jpg' },
    { id: 4, title: ' Male', image: 'https://media0.giphy.com/media/ypX8YZszkIXFC/giphy.gif' },
    // tslint:disable-next-line: max-line-length
    { id: 5, title: ' k', image: 'https://cdn.cnn.com/cnnnext/dam/assets/171122130029-10-reasons-to-visit-plovdiv---plovdiv-main-street-full-169.jpg' },
    { id: 6, title: ' Vui vui', image: 'https://negramoten.000webhostapp.com/wp-content/uploads/2017/03/Vyi.jpg' },
    { id: 7, title: ' Sylza', image: 'https://i.ytimg.com/vi/ki10twOf6zQ/maxresdefault.jpg' },
    { id: 8, title: ' Sq si', image: 'https://memegenerator.net/img/instances/67684217.jpg' },
    { id: 9, title: ' Nqma kak', image: 'https://media2.giphy.com/media/Hlc2TPGlDYZFK/source.gif' }
];




function addMeme(meme: Meme) {
    MEMES.push(meme);
}
