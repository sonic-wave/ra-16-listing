import { IListing } from "../models/index"

export const Listing = ({ items }: { items: IListing[] }) => {
    const levelCheck = (quantity: number) => {
        if (quantity <= 10) return 'level-low'
        if (quantity <= 20) return 'level-medium'
        return 'level-high'
    }

    const currencyCheck = (price: string, currency: string) => {
        if (currency === 'USD') return `$${price}`
        if (currency === 'EUR') return `€${price}`
        return `${price} ${currency}`
    }

    return (

        <div className="item-list">
            {
                items.map(item => (
                    <div className="item" key={item.listing_id}>
                        <div className="item-image">
                            <a href={item.url}>
                                {item.MainImage && item.MainImage.url_570xN ? (
                                    <img src={item.MainImage.url_570xN} alt={item.title} />
                                ) : (
                                    <span>No image available</span>
                                )}
                            </a>
                        </div>
                        <div className="item-details">
                            <p className="item-title">{item.title ? (
                                item.title.length > 50 ? `${item.title.slice(0, 50)} ...` : item.title)
                                : (
                                    <span>No title available</span>
                                )}</p>
                            <p className="item-price">{item.price ? (
                                currencyCheck(item.price, item.currency_code)
                            ) : (<span>No price available</span>)}</p>
                            <p className={`item-quantity ${levelCheck(item.quantity)}`}>{item.quantity} left</p>
                        </div>
                    </div>
                ))}
        </div>
    )
}