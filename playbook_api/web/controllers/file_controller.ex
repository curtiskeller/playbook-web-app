defmodule PlaybookApi.FileController do

  use PlaybookApi.Web, :controller

  def create(conn, params = %{"file" => file}) do
      #extension = Path.extname(params.filename)
      #IO.inspect(params)
      #TODO use some unique id per user or playbook to save files.
      #File.cp(params.path, "/media/#{extension}")
      json(conn,"")
  end

end