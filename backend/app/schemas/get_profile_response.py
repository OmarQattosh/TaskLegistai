class GetProfileResponse:
    def __init__(self,name,location,phonenumber,email,description,rating):
        self.name = name
        self.location = location
        self.phonenumber = phonenumber
        self.email = email
        self.description = description
        self.rating = rating
    
    def to_json(self):
        return{
            "name" : self.name,
            "location" : self.location,
            "phonenumber" : self.phonenumber,
            "email" : self.email,
            "description" : self.description,
            "rating" : self.rating
        }
