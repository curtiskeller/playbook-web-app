defmodule DesignServices.PlayDesignTests do
  use ExUnit.Case
  alias DesignServices.PlayDesign

  @play_design_id 12345

  setup do
    { :ok, sut } = DesignServices.PlayDesign.start_link(%{:play_design_id => @play_design_id})
    { :ok, sut: sut}
  end

  test "starts a genserver with correct map as initial state" do
    state = PlayDesign.get_play(@play_design_id)
    assert state == %{:play_design_id => @play_design_id}
  end

  test "updates the plays state to the new state" do
    new_state = %{ :play_design_id => @play_design_id, :name => "test", :list => [1,2,3,4]}
    state = PlayDesign.update(@play_design_id, new_state)
    assert state == new_state
  end

  test "registers process with Registry fails for duplicate id" do
     {:error, {:already_started, _}} = DesignServices.PlayDesign.start_link(%{:play_design_id => @play_design_id})
  end

  test "registers process properly with Registry" do
    [{ pid, _ }] = Registry.lookup(:design_process_registry, @play_design_id)
    assert pid != nil
  end
  
end
