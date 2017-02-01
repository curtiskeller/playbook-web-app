defmodule PlaybookApi.Router do
  use PlaybookApi.Web, :router

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/api", PlaybookApi do
    pipe_through :api
  end
end
