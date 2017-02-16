defmodule PlaybookApi.PlaybookLibraryController do

  use PlaybookApi.Web, :controller

  def index(conn, _params) do
    res = Enum.map(1..10, fn(x) -> %{:id => x,:name => "Playbook", :owner => "Corey"} end)

    put_status(conn,200)
    json(conn,res)
  end

end