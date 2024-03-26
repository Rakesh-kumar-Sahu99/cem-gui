export class menuConfig{
    public static data =  {
        "Data Manager": {
            "icon": "fa-solid fa-circle-dot",
            "subModules": [
                {
                    "url": "/dataService",
                    "resourceName": "dataService"
                },
                {
                    "url": "/dataSource",
                    "resourceName": "dataSource"
                }
            ]
        }
    };
}