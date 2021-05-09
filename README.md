# COVID WARRIOR PROJECT

### Create Resource

`http://localhost:8080/test`

**Request Body**

```json
{
    "resourceType" : "AMBULANCE",
    "district" : "Kannur",
    "state" : "Kerala",
    "contactNumber" : "9842657094",
    "additionalInfo" : "Please call us anytime"
}
```

### GET Resource 

`http://localhost:8080/test2
`
```json
[
    {
        "id": 1,
        "resourceType": "COVID_CAB",
        "district": "Karur",
        "state": "Tamil_Nadu",
        "contactPerson": null,
        "contactNumber": "9842657094",
        "additionalInfo": "Please call us anytime"
    },
    {
        "id": 2,
        "resourceType": "AMBULANCE",
        "district": "Karur",
        "state": "Tamil_Nadu",
        "contactPerson": null,
        "contactNumber": "9842657094",
        "additionalInfo": "Please call us anytime"
    },
    {
        "id": 3,
        "resourceType": "AMBULANCE",
        "district": "Salem",
        "state": "Tamil_Nadu",
        "contactPerson": null,
        "contactNumber": "9842657094",
        "additionalInfo": "Please call us anytime"
    },
    {
        "id": 4,
        "resourceType": "AMBULANCE",
        "district": "Kannur",
        "state": "Kerala",
        "contactPerson": null,
        "contactNumber": "9842657094",
        "additionalInfo": "Please call us anytime"
    }
]
```
### GET Resource with filters

`http://localhost:8080/test2?st=Tamil_Nadu&rt=COVID_CAB&dt=Karur
`
```json
[
    {
        "id": 1,
        "resourceType": "COVID_CAB",
        "district": "Karur",
        "state": "Tamil_Nadu",
        "contactPerson": null,
        "contactNumber": "9842657094",
        "additionalInfo": "Please call us anytime"
    },
    {
        "id": 2,
        "resourceType": "AMBULANCE",
        "district": "Karur",
        "state": "Tamil_Nadu",
        "contactPerson": null,
        "contactNumber": "9842657094",
        "additionalInfo": "Please call us anytime"
    },
    {
        "id": 3,
        "resourceType": "AMBULANCE",
        "district": "Salem",
        "state": "Tamil_Nadu",
        "contactPerson": null,
        "contactNumber": "9842657094",
        "additionalInfo": "Please call us anytime"
    },
    {
        "id": 4,
        "resourceType": "AMBULANCE",
        "district": "Kannur",
        "state": "Kerala",
        "contactPerson": null,
        "contactNumber": "9842657094",
        "additionalInfo": "Please call us anytime"
    }
]
```