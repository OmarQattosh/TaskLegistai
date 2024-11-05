class GetProfileRequest:
    def __init__(self,user_id):
        self.user_id = user_id
    
    @classmethod
    def from_request(cls, request):
        return cls(
            user_id=request.get('user_id'),
        )
