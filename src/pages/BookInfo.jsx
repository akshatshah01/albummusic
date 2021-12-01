import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, {useState} from 'react';
import { Link,useParams } from 'react-router-dom';
import Rating from '../components/ul/Rating';
import Price from '../components/ul/Price';
import { faBookReader } from '@fortawesome/free-solid-svg-icons';
import Book from '../components/ul/Book';
const BookInfo = ({ books, addToCart,cart}) => {
    const {id} = useParams();
    const book = books.find((book) => +book.id === +id);
    

   
function addBooktoCart(book){
    
    addToCart(book)
}

function bookExistsOnCart(){
    return cart.find(book => book.id === +id);
}



    return (
        <div id="books__body">
            <main id="books__main">
            <div className="books__container">
                <div className="row">
                    <div className="book__selected--top">
                        <Link to="/books" className="book__link">
                            <FontAwesomeIcon icon="arrow-left" />
                        </Link>
                        <Link to="/books" className="book__link"> 
                            <h2 className="book__selected--title--top">Music</h2>
                        </Link>
                    </div>
                    <div className="book__selected">
                        <figure className="book__selected--figure">
                            <img src={book.url} alt="" className="book__selected--img" />
                        </figure>
                        <div className="book__selected--description">
                            <h2 className="book__selected--title">{book.title}</h2>
                         <Rating rating={book.rating}/>
                         <div className="book__selected--price">
                       <Price originalPrice ={book.originalPrice} salePrice={book.salePrice} />
                         </div>
                        
                         {
                             bookExistsOnCart() ? (
                             <Link to={`/cart`}className="book__link">
                             <button className="btn">Checkout</button>)
            
                             </Link>
                           )  :(
                             <button className="btn" onClick={()=> addBooktoCart(book)}>
                             Add to cart
                         </button>  )
    } 
                         
                        </div>
                    </div>
                </div>
            </div>

            <div className="books__container">
                <div className="row">
                    <div className="book__selected--top">
                        <h2 className="book__selected--title--top">
                            Recommended Books
                        </h2>
                    </div>
                    <div className="books">
                    {
                    books
                        .filter(book => book.rating === 5 && +book.id !== +id)
                        .slice(0,4)
                        .map((book) => (<Book book={book} key={book.id} />
                        ))
                    }
                </div>
                </div>
            </div>
            </main>
        </div>



        
    );
}

export default BookInfo;