using System;
using System.Collections.Generic;

namespace NationalParkFinder.Models;

public partial class Badge
{
    public int Id { get; set; }

    public string? Name { get; set; }

    public string? Desciption { get; set; }

    public string? BadgeImg { get; set; }
    [System.Text.Json.Serialization.JsonIgnore]
    public virtual ICollection<UserBadge> UserBadges { get; } = new List<UserBadge>();
}
