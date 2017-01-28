defmodule PlaybookWeb.PageController do
  use PlaybookWeb.Web, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
