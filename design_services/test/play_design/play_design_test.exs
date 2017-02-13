defmodule DesignServices.PlayDesignTests do
  use ExUnit.Case
  alias DesignServices.PlayDesign

  setup do
    { :ok, sut } = DesignServices.PlayDesign.start_link(%{})
    { :ok, sut: sut}
  end

  test "starts a genserver with empty map as initial state", %{sut: sut} do
    state = PlayDesign.get_play(sut)
    assert state == %{}
  end

  test "updates the plays state to the new state", %{sut: sut} do
    new_state = %{ :name => "test", :list => [1,2,3,4]}
    state = PlayDesign.update(sut, new_state)
    assert state == new_state
  end

end
