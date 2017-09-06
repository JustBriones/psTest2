PriceSpider.onload('000000000000000000000000/config', {
    "loadButtonCss": true,
    "widgetType": "lightbox",
    "loadLocalStock": true,
    "loadResources": true,
    "mapKey": "pk.eyJ1IjoicHJpY2VzcGlkZXIiLCJhIjoiY2lyNmkzdXZ6MDBkeGcybmZkenZrdWlmOSJ9.04p3f9FWK4cjJYG6Yb7fMA",
    "loadIpLocation": false,
    "loadBrowserLocation": true,
    "updateTimerSeconds": [0,5,15,30],
    "requireSellers": "either",
    "rules": [{
        "match": {
            "countryCode": ["US"],
            "tag": [],
            "sku": []
        },
        "actions": {
            "online": [
                "includeSellers:[2,167,185,189,7045,7059,209030,2042903]",
                "excludeStockStatus:[preorder,backorder,discontinued,unknown,callStore,notAvailableDirect]",
                "shuffle",
                "excludeMarketplaceSellers",
                "excludeMapViolations"
            ],
            "local": [
                "includeSellers:[167,185,189,7045,7059,209030]",
                "includeDistance:250k",
                "sort:distance",
                "limitSameSellers:5",
                "limit:20"
            ]
        }
    }],
     "res": {
         "en": {
            "wtbButtonLabel": "Where to Buy",
            "wtbButtonDisabledNoSellers": "No Sellers Found",
            "wtbButtonDisabledNoSku": "No Sellers Found",
            "distanceUnits": {
                "miles": "mi",
                "kilometers": "km"
            },
            "timeFormat": "h:mma",
            "storeHours": {
                "hourRangeSeparator": " - "
            },
            "stockStatus": {
                "inStock": "In Stock",
                "outOfStock": "Out of Stock",
                "preorder": "Preorder",
                "backorder": "Backorder",
                "callStore": "Call for Stock",
                "freeShipping": "Call for Stock",
                "shipToHome": "Call for Stock",
                "shipToStore": "Call for Stock",
                "unknown": "Call for Stock"
            }
         }
    }
});
