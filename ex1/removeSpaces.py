import json

def remove_spaces_from_file(input_filename, output_filename):
    result = []
    with open(input_filename, 'r') as input_file:
        data = json.load(input_file)
        for entry in data:
            new_entry = {}
            for key, value in entry.items():
                new_key = key.replace(" ", "")
                new_entry[new_key] = value
            result.append(new_entry)
    
    with open(output_filename, 'w') as output_file:
        json.dump(result, output_file, indent=2)
    
    print(f"Arquivo '{output_filename}' criado com as alterações.")

# Exemplo de uso: remover espaços do arquivo JSON e criar um novo arquivo
input_filename = "plantasAlterado.json"
output_filename = "plantasFinal.json"

# Chamada da função para remover espaços nas chaves e criar um novo arquivo JSON
remove_spaces_from_file(input_filename, output_filename)

