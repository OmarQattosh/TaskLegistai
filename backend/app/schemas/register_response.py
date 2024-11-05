class RegisterResponse:
    def __init__(self, user_id):
        self.user_id = user_id

    def to_json(self):
        return {
            "user_id" : self.user_id
        }