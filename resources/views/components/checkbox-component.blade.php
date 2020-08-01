<div class="Form-field">

<art-input-checkbox
    id="{{$inputName}}" 
    class="Form-checkbox" 
    name="{{ $inputName }}" 
    value="{{ $inputValue }}" 
    {{ old($inputName) ? 'checked' : '' }}
  >
  {{ $inputLabel }}
</art-input-checkbox>

  @error($inputName)
    <span class="Form-msg invalid-feedback" role="alert">
        <strong>{{ $message }}</strong>
    </span>
  @enderror
</div>