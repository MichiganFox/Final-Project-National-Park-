using System;
using System.Collections.Generic;

namespace NationalParkFinder.Models;

public partial class UserAdventureLog
{
    public int Id { get; set; }

    public string? AdventureId { get; set; }

    public int? UserId { get; set; }

    public virtual UserProfile? User { get; set; }
}
