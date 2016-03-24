require "test_helper"

class Api::V1::IdeasControllerTest < ActionController::TestCase

  def setup
    @idea1 = Idea.create(name: "john", description: "kewl")
    @idea2 = Idea.create(name: "edgar", description: "sweet")
  end

  test "#index" do
    get :index, format: :json

    ideas = JSON.parse(response.body)
    assert_response(:success)

    assert_equal ideas.first["name"], "edgar"
    assert_equal ideas.first["description"], "sweet"
    assert_equal ideas.first["quality"], "swill"

    assert_equal ideas.last["name"], "MyString"
    assert_equal ideas.last["description"], "MyString"
    assert_equal ideas.last["quality"], "MyString"


  end

  test "#show" do
    get :show, format: :json, id: @idea2.id

    idea = JSON.parse(response.body)
    assert_response(:success)

    assert_equal idea["name"], "edgar"
    assert_equal idea["description"], "sweet"
    assert_equal idea["quality"], "swill"
  end

  test "#delete" do
    assert_equal Idea.count, 4
    delete :destroy, format: :json, id: @idea2.id

    assert_response(:success)
    assert_equal Idea.count, 3
  end

  test "#create" do
    post :create, format: :json, name: "steve", description: "super kewl", image_url: "tight"

    idea = JSON.parse(response.body)
    assert_response(:success)

    assert_equal idea.count, 6
    assert_equal idea["name"], "steve"
    assert_equal idea["description"], "super kewl"
    assert_equal idea["quality"], "swill"
  end

end
