curl "https://tic-tac-toe-api-production.herokuapp.com/games" \
  --include \
  --request POST \
  --header "Content-Type: applicaiton/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "game": {
    }
  }'
