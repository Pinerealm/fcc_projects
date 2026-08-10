test_settings = {
    "theme": "dark",
    "notifications": "enabled",
    "language": "english",
    "privacy": "high",
    "font_size": "medium",
}

def add_setting(settings, to_add):
    to_add = (to_add[0].lower(), to_add[1].lower())
    if to_add[0] in settings:
        return f"Setting '{to_add[0]}' already exists! Cannot add a new setting with this name."
    else:
        settings[to_add[0]] = to_add[1]
        return f"Setting '{to_add[0]}' added with value '{to_add[1]}' successfully!"


def update_setting(settings, to_update):
    to_update = (to_update[0].lower(), to_update[1].lower())
    if to_update[0] in settings:
        settings[to_update[0]] = to_update[1]
        return (
            f"Setting '{to_update[0]}' updated to '{to_update[1]}' successfully!"
        )
    else:
        return f"Setting '{to_update[0]}' does not exist! Cannot update a non-existing setting."


def delete_setting(settings, to_delete):
    to_delete = to_delete.lower()
    if to_delete in settings:
        del settings[to_delete]
        return f"Setting '{to_delete}' deleted successfully!"
    else:
        return f"Setting not found!"


def view_settings(settings):
    if not settings:
        return "No settings available."
    result = "Current User Settings:\n"
    for key, value in settings.items():
        result += f"{key.capitalize()}: {value}\n"
    return result


if __name__ == "__main__":
    user_settings = {}

    print(add_setting(user_settings, ("Theme", "Dark")))
    print(add_setting(user_settings, ("Notifications", "Enabled")))
    print(view_settings(user_settings))

    print(update_setting(user_settings, ("Theme", "Light")))
    print(view_settings(user_settings))

    print(delete_setting(user_settings, "Notifications"))
    print(view_settings(user_settings))
