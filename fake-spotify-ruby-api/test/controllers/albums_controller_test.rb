require 'test_helper'

class AlbumsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @album = albums(:one)
  end

  test "should get index" do
    get albums_url, as: :json
    assert_response :success
  end

  test "should create album" do
    assert_difference('Album.count') do
      post albums_url, params: { album: { artist_id: @album.artist_id, copyright: @album.copyright, title: @album.title, year: @album.year } }, as: :json
    end

    assert_response 201
  end

  test "should show album" do
    get album_url(@album), as: :json
    assert_response :success
  end

  test "should update album" do
    patch album_url(@album), params: { album: { artist_id: @album.artist_id, copyright: @album.copyright, title: @album.title, year: @album.year } }, as: :json
    assert_response 200
  end

  test "should destroy album" do
    assert_difference('Album.count', -1) do
      delete album_url(@album), as: :json
    end

    assert_response 204
  end
end
