defmodule PlaybookApi.FileController do

  use PlaybookApi.Web, :controller

  def create(conn, params = %{"file" => file}) do
      #TODO use some unique id per user or playbook to save files.
      File.cp!(file.path, "C:\\media\\#{file.filename}")

      conn
      |> put_status(:created)
      |> json(file)
  end

end