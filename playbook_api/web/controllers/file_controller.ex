defmodule PlaybookApi.FileController do

  use PlaybookApi.Web, :controller

  def upload(conn, params) do
      IO.inspect(params)
      put_status(conn,200)
  end

end