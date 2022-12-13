import React from "react";

function PortfolioItem({title, imgUrl, stack, link}) {
    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-stone-900 dark:border-white rounded-md overflow-hidden"
        >
            
                <img 
                    src={imgUrl}
                    alt="portfolio"
                    className="w-full h-36 md:h-48 object-hover cursor-pointer"
                />
                <div className="w-full p-4">
                    <h3 className="text-lg md:text-xl mb-2 
                    md:mb-3 font-semibold
                    dark:text-white">{title}</h3>
                    <p className="flex flex-wrap gap-2 flex-row 
                    items-center justify-start text-xs 
                    md:test-sm">
                        {stack.map(item => (
                        <span className="inline-block px-2 
                        py-1 font-semibold border-2
                        dark:border-white 
                        dark:text-white
                        border-stone-900 rounded-md">
                        {item}
                        </span>
                        ))}
                    </p>
                </div>
        </a> 
    )
}

export default PortfolioItem;