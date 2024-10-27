import re


def clean_filename(filename):
    # Remove the hash and _converted.png
    name = re.sub(r'[a-f0-9]{32}_converted\.png$', '', filename)
    # Split into words
    words = name.split('_')
    # Capitalize each word
    words = [word.title() for word in words]
    return ' '.join(words)


def generate_description(name):
    # Generate a basic description based on the filename
    # This could be expanded with more specific descriptions
    if 'heat' in name.lower():
        return "High-explosive anti-tank shell for maximum penetration."
    elif 'he' in name.lower():
        return "High-explosive shell designed for area effect damage."
    elif 'ap' in name.lower():
        return "Armor-piercing shell for defeating heavy armor."
    elif 'apds' in name.lower():
        return "Armor-piercing discarding sabot round for maximum penetration."
    else:
        return f"Specialized ammunition designed for optimal performance."


def generate_markdown(filename, index):
    clean_name = clean_filename(filename)

    markdown = f"""<div align="center">

![{index}](https://raw.githubusercontent.com/ThatSINEWAVE/pcw-bughunters/refs/heads/main/images/datamining/Shell%20Types%20and%20Shell%20Upgrades/{filename})

</div>

#### {clean_name}

Original file name: {filename}

{generate_description(filename)}

"""
    return markdown


def main():
    # Read the input file
    with open('files.txt', 'r') as file:
        filenames = [line.strip() for line in file.readlines()]

    # Generate markdown for each file
    markdown_output = ""
    for i, filename in enumerate(filenames, 1):
        markdown_output += generate_markdown(filename, i)

    # Write to output file
    with open('shell_documentation.md', 'w') as file:
        file.write(markdown_output)


if __name__ == "__main__":
    main()