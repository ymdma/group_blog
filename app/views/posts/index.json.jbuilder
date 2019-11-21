# json.array! @group_posts do |g|
#   # json.title g.title
#   json.date Time.now
# end

json.array! @group_posts do |post|
  json.id post.id
  json.user_name post.user.name
  json.date message.created_at.strftime("%Y年%m月%d日 %H時%M分")
  json.content message.content
  json.image message.image.url
end