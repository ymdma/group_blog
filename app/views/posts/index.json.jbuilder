

json.array! @group_posts do |post|
  json.id post.id
  json.title post.title
  json.name post.name
  json.date post.created_at.strftime("%Y年%m月%d日 %H時%M分")
  json.content post.content
  json.image post.image.url
end

json.array! @user_posts do |apost|
  json.id apost.id
  json.title apost.title
  json.user_name apost.user.name
  json.date apost.created_at.strftime("%Y年%m月%d日 %H時%M分")
  json.content apost.content
  json.image apost.image.url
end

