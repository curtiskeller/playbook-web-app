defmodule PlaybookApi.PlaybookLibraryController do

  use PlaybookApi.Web, :controller

  plug :action

  def index(conn, _params) do
    res = Enum.map(1..20, fn(x) -> %{:id => x,:name => "Playbook", :owner => "Corey"} end)

    #res = [%{ :id => 1, :name => "Playbook1", :owner => "Corey"}, %{ :id => 2, :name => "Golden Deagles", :owner => "Curtis"}]
    put_status(conn,200)
    json(conn,res)
  end

end