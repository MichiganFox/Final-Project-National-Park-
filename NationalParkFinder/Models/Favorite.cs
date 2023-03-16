using System;
using System.Collections.Generic;

namespace NationalParkFinder.Models;

public partial class Favorite
{
    public int Id { get; set; }

    public string? ParkId { get; set; }

    public int? UserId { get; set; }

    public virtual UserProfile? User { get; set; }
}
