# json.array! @group_posts do |g|
#   # json.title g.title
#   json.date Time.now
# end

json.array! @user_posts do |post|
  json.id post.id
  json.title post.title
  json.user_name post.user.name
  json.date post.created_at.strftime("%Y年%m月%d日 %H時%M分")
  json.content post.content
  json.image post.image.url
end