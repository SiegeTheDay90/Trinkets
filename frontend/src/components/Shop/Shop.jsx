import { useDispatch, useSelector } from 'react-redux';
import './Shop.css'
import { useParams } from "react-router-dom";
import { fetchShop, sendLike } from "../../store/shops";
import { useEffect, useState } from "react";
import ProductListItem from './ProductListItem';

const Shop = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(fetchShop(id))
    }, [id, dispatch]);


    const shop = useSelector(state => state.shops[id]);
    const users = useSelector(state => state.users);
    const [liked, setLiked] = useState(false)

    let seller = {firstName: "First"};
    if (shop && users){
        seller = users[shop.sellerId]
        if(shop.liked === "true"){
            setLiked(true)
        }
    }
    const products = useSelector(state => state.products);
    if (!seller) return null;

    const followClick = () => {

        dispatch(sendLike(shop.id))
        const value = liked ? false : true;
        setLiked(value);
        // debugger;
    }

    const heart = () => {
        // debugger;
        if(!shop.liked){
            return "fa-regular fa-heart"
        } else{
            return "fa-solid fa-heart"
        }
    }
    

    return (
        <>
        {shop &&
        <div id="shop-outer-container">
            <img id="shop-cover-photo" src={shop.coverPhotoUrl} alt="cover photo"/>
            <div id="shop-info-container">
                <div id="header">
                    <div id="header-left">
                        <img id="shop-logo" src={shop.photoUrl} alt="shop logo"/>
                        <div id="shop-info">
                            <h1>{shop.name}</h1>
                            <p id="description">{shop.description}</p>
                            <p id="location">{shop.state}, {shop.country}</p>
                            <div id="ratings">
                                {false && <p>star seller</p>/*star seller logic*/}
                                <p id="sales">{shop.sales} sales |&nbsp;</p>
                                <p id="rating">Rating: {shop.rating}</p>
                        <button id="button-follow" onClick={followClick}><i className={heart()} ></i> &nbsp;Follow shop</button>
                            </div>
                        </div>

                    </div>
                        {false && <p>star seller pics</p>/*star seller logic*/}

                    <div id="header-right">
                        <img id="profile-pic" src={seller.photoUrl} alt="seller-pic"/>
                        <p id="seller-name">{seller.firstName}</p>
                        <button><i className="fa-solid fa-envelope-open-text"></i> Contact</button>
                    </div>

                </div>
                <div id="shop-main">
                    <h1>Items</h1>
                    <div id="shop-main-item-container">
                        <div id="shop-item-categories">
                            Categories
                        </div>
                        <div id="shop-item-grid">
                            {Object.values(products).map((product) => (
                                <ProductListItem id={product.id}/>
                            ))}                                                
                        </div>
                    </div>
                </div>
            </div>
        </div>}
        {!shop && <h1>Invalid shop ID</h1>}
        </>
    )
}

export default Shop;