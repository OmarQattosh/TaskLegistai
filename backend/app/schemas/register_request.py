class RegisterRequest:
    def __init__(self, name, location, phonenumber, email, description, rating):
        self.name = name
        self.location = location
        self.phonenumber = phonenumber
        self.email = email
        self.description = description
        self.rating = rating

    @classmethod
    def from_request(cls, request):
        return cls(
            name=request.get('name'),
            location=request.get('location'),
            phonenumber=request.get('phonenumber'),
            email=request.get('email'),
            description=request.get('description'),
            rating=request.get('rating')
        )
